import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { FileUploadComponent } from '@components';
import { ADDITIONAL_OPTIONS, AppRoutes, ControlPanel, Fuel, TARIFF_OPTIONS } from '@constants';
import { DestroyDirective } from '@directives';
import { AutoparkCard, CarCard, CreateCar } from '@models';
import { CarService } from '@services';
import { AutoparkFacade } from '@store';
import { ChipsModule } from 'primeng/chips';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { filter, Observable, switchMap, takeUntil, tap } from 'rxjs';

import { STATIC_DROPDOWNS } from './create-car.contants';
import { CREATE_CAR_DEPS } from './create-car.dependencies';
import {
  CreateCarForm,
  ECommissionStatus,
  EDepositStatus,
  EOppotrunityBuyCar,
  ICommissionForm,
  IDepositForm,
} from './create-car.model';
import { CheckboxChangeEvent } from 'primeng/checkbox';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss'],
  standalone: true,
  imports: [
    CREATE_CAR_DEPS,
    InputTextModule,
    RouterLink,
    InputSwitchModule,
    RadioButtonModule,
    FormsModule,
    ChipsModule,
  ],
  hostDirectives: [DestroyDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCarComponent implements OnInit {
  @ViewChild('files') filesComponent: FileUploadComponent;

  readonly editMode = signal<boolean>(false);

  readonly tariffTypes = TARIFF_OPTIONS;
  readonly additionalInfo = ADDITIONAL_OPTIONS;

  readonly depositForm = new FormGroup<IDepositForm>({
    value: new FormControl<number | null>(null),
    status: new FormControl<EDepositStatus | null>(EDepositStatus.NON_DEPOSIT),
  });
  readonly commissionForm = new FormGroup<ICommissionForm>({
    value: new FormControl<number | null>(null),
    status: new FormControl<ECommissionStatus | null>(ECommissionStatus.NON_COMMISSION),
  });
  readonly buyPriceControl = new FormControl<number | null>(null);
  readonly enableBuyCar = signal<boolean>(false);
  readonly images = signal<string[]>([]);

  readonly AppRoutes = AppRoutes;
  readonly ControlPanel = ControlPanel;

  readonly activeAutopark = signal<AutoparkCard | null>(null);

  readonly STATIC_DROPDOWNS = STATIC_DROPDOWNS;
  carForm: FormGroup<CreateCarForm> = new FormGroup<CreateCarForm>({
    id: new FormControl<number | null>(null),
    brand: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    model: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    price: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required] }),
    financialInfo: new FormControl<string[]>([], { nonNullable: true }),
    rentalConditions: new FormControl<string[]>([], { nonNullable: true }),
    STS: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    VIN: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    carStateNumber: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    additionalInfo: new FormControl<string[]>([], { nonNullable: true }),
    yearOfRelease: new FormControl<number | null>(null, { validators: [Validators.required] }),
    transmission: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    fuelType: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    enginePower: new FormControl<number | null>(null, { validators: [Validators.required] }),
    type: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    rentSchedule: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    minRentPeriod: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  readonly EDepositStatus = EDepositStatus;
  readonly EComissionStatus = ECommissionStatus;

  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private carService: CarService,
    private autoparkFacade: AutoparkFacade,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    effect(() => {
      if (this.enableBuyCar()) {
        this.buyPriceControl.enable();
      } else {
        this.buyPriceControl.disable();
      }
    });
  }

  ngOnInit(): void {
    this.autoparkFacade.activeAutopark$.pipe(takeUntil(this.destroy$)).subscribe(autopark => {
      this.activeAutopark.set(autopark);
    });

    this.commissionForm.controls.value.disable();
    this.depositForm.controls.value.disable();
    this.commissionForm.controls.status.valueChanges
      .pipe(
        tap(() => {
          this.commissionForm.controls.value.enable();
        }),
        filter(status => status === ECommissionStatus.NON_COMMISSION),
        tap(() => {
          this.commissionForm.controls.value.disable();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.depositForm.controls.status.valueChanges
      .pipe(
        tap(() => {
          this.depositForm.controls.value.enable();
        }),
        filter(status => status === EDepositStatus.NON_DEPOSIT),
        tap(() => {
          this.depositForm.controls.value.disable();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.activeRoute.params
      .pipe(
        tap(() => {
          // this.carForm = this.initializeForm();
          this.editMode.set(false);
        }),
        filter(params => Boolean(params['id'])),
        switchMap(params => this.carService.getCarProfile(+params['id'])),
        tap(car => {
          this.fillForm(car);
          this.editMode.set(true);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  changeBuyCarStatus(event: CheckboxChangeEvent): void {
    console.log(event);
    this.enableBuyCar.set(event.checked);
  }

  onSubmit(): void {
    const files = this.filesComponent.files$.getValue();
    const car = {
      ...this.carForm.value,
      fuel: this.carForm.controls.fuelType.value as Fuel,
      autoparkId: this.activeAutopark()?.id,
      images: files,
      financialInfo: this.getFinancialInfo(),
    } as CreateCar;

    const data = new FormData();
    Object.keys(car).forEach((objkey: string) => {
      const key = objkey as keyof CreateCar;
      const field = car[key];
      if (Array.isArray(field)) {
        console.log(field);
        field.forEach(element => {
          const value: string = element.toString();
          data.append(key, value);
        });
      } else {
        const value: string = field?.toString() as string;
        data.append(key, value);
      }
    });

    files.forEach(file => {
      data.append('images', file);
    });

    /// service method
    let carObserver: Observable<CarCard>;
    if (!this.editMode()) {
      carObserver = this.carService.createCar(data);
    } else {
      carObserver = this.carService.updateCar(car.id!, car);
    }

    carObserver.subscribe(res => {
      this.router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CARS_TABLE]);
    });
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  deleteCar(): void {
    this.carService.deleteCar(this.carForm.value.id!).subscribe(() => {
      console.log('deleted');
      this.router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CARS_TABLE]);
    });
  }

  private getFinancialInfo(): string[] {
    const financialInfo: string[] = [];
    const commissionFormValue = this.commissionForm.value;
    const depositFormValue = this.depositForm.value;

    if (commissionFormValue.status === ECommissionStatus.COMMISSION) {
      if (commissionFormValue.value) {
        financialInfo.push(`${commissionFormValue.status} - ${commissionFormValue.value}`);
      } else {
        financialInfo.push(`${commissionFormValue.status}`);
      }
    } else {
      financialInfo.push(ECommissionStatus.NON_COMMISSION);
    }

    if (depositFormValue.status === EDepositStatus.DEPOSIT) {
      if (depositFormValue.value) {
        financialInfo.push(`${depositFormValue.status} - ${depositFormValue.value}`);
      } else {
        financialInfo.push(`${depositFormValue.status}`);
      }
    } else {
      financialInfo.push(EDepositStatus.NON_DEPOSIT);
    }

    if (this.enableBuyCar()) {
      if (this.buyPriceControl.value) {
        financialInfo.push(`${EOppotrunityBuyCar.EXISTS_WITH_PRICE} - ${this.buyPriceControl.value}`);
      } else {
        financialInfo.push(`${EOppotrunityBuyCar.EXISTS}`);
      }
    }

    return financialInfo;
  }

  private parseFinancialInfo(financialInfo: string[]): void {
    if (financialInfo[0]) {
      const commissionValue = financialInfo[0].split(' - ');

      this.commissionForm.patchValue({
        status: (commissionValue[0] ?? ECommissionStatus.COMMISSION) as ECommissionStatus,
        value: Number(commissionValue[1]) || null,
      });
    }
    if (financialInfo[1]) {
      const depositValue = financialInfo[1].split(' - ');
      this.depositForm.patchValue({
        status: (depositValue[0] ?? EDepositStatus.NON_DEPOSIT) as EDepositStatus,
        value: Number(depositValue[1]) || null,
      });
    }

    if (financialInfo[2]) {
      this.enableBuyCar.set(true);
      const buyPriceValue = financialInfo[2].split(' - ');
      this.buyPriceControl.setValue(Number(buyPriceValue[1] ?? 0));
    }
  }

  private fillForm(carCard: CarCard): void {
    this.parseFinancialInfo(carCard.financialInfo);

    this.carForm.patchValue({
      id: carCard.id,
      brand: carCard.brand,
      model: carCard.model,
      yearOfRelease: carCard.yearOfRelease,
      transmission: carCard.transmission,
      fuelType: carCard.fuel,
      enginePower: carCard.enginePower,
      type: carCard.type,
      additionalInfo: carCard.additionalInfo,
      financialInfo: carCard.financialInfo,
      price: carCard.price,
      rentSchedule: carCard.rentSchedule,
      minRentPeriod: parseInt(carCard.minRentPeriod, 10),
      rentalConditions: carCard.rentalConditions,
    });
    this.images.set(carCard.photos);

    // return new FormGroup<CreateCarForm>(<CreateCarForm>{
    //   id: new FormControl(carCard.id),
    //   brand: new FormControl(carCard.brand),
    //   model: new FormControl(carCard.model),
    //   yearOfRelease: new FormControl(carCard.yearOfRelease),
    //   transmission: new FormControl(carCard.transmission),
    //   fuelType: new FormControl(carCard.fuel),
    //   enginePower: new FormControl(carCard.enginePower),
    //   type: new FormControl(carCard.type),
    //   additionalInfo: new FormControl(carCard.additionalInfo),
    //   financialInfo: new FormControl(carCard.financialInfo),
    //   price: new FormControl(carCard.price),
    //   rentSchedule: new FormControl(carCard.autopark.rentSchedule),
    //   minRentPeriod: new FormControl(parseInt(carCard.autopark.minRentPeriod, 10)),
    //   rentalConditions: new FormControl(carCard.autopark.rentalConditions),
    //   images: new FormControl(carCard.photos),
    // });
  }
}
