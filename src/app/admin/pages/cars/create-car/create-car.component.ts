import { ChangeDetectionStrategy, Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { FileUploadComponent } from '@components';
import {
  ADDITIONAL_OPTIONS,
  AppRoutes,
  ControlPanel,
  Fuel,
  FUEL_OPTIONS,
  MIN_RENTAL_PERIOD_OPTIONS,
  TARIFF_OPTIONS,
  TRANSMISSION_OPTIONS,
  WORK_SCHEDULE_OPTIONS,
} from '@constants';
import { AutoparkCard, CarCard, CreateCar, Dropdown } from '@models';
import { Store } from '@ngrx/store';
import { CarService } from '@services';
import { InputTextModule } from 'primeng/inputtext';
import { filter, Observable, switchMap, takeUntil, tap } from 'rxjs';

import { AutoparkFacade } from '@store';
import { DestroyDirective } from '@directives';
import { FULL_FINANCIAL_OPTIONS } from '../../autopark';

import { CREATE_CAR_DEPS } from './create-car.dependencies';
import { CreateCarForm } from './create-car.model';

@Component({
  selector: 'app-create-car',
  standalone: true,
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss'],
  imports: [CREATE_CAR_DEPS, InputTextModule, RouterLink],
  hostDirectives: [DestroyDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCarComponent implements OnInit {
  @ViewChild('files') filesComponent: FileUploadComponent;

  public readonly editMode = signal<boolean>(false);

  public readonly financialOptions = FULL_FINANCIAL_OPTIONS;
  public readonly tariffTypes = TARIFF_OPTIONS;
  public readonly additionalInfo = ADDITIONAL_OPTIONS;

  public readonly AppRoutes = AppRoutes;
  public readonly ControlPanel = ControlPanel;

  public readonly activeAutopark = signal<AutoparkCard | null>(null);

  private destroy$ = inject(DestroyDirective).destroy$;

  public STATIC_DROPDOWNS: Dropdown[] = [
    {
      label: 'График работы',
      formControlName: 'rentSchedule',
      placeholder: 'График работы',
      options: WORK_SCHEDULE_OPTIONS,
    },
    {
      label: 'КПП',
      formControlName: 'transmission',
      placeholder: 'Выберите из списка',
      options: TRANSMISSION_OPTIONS,
    },
    {
      label: 'Тип топлива',
      formControlName: 'fuelType',
      placeholder: 'Выберите из списка',
      options: FUEL_OPTIONS,
    },
    {
      label: 'Срок аренды',
      formControlName: 'minRentPeriod',
      placeholder: 'Выберите срок аренды',
      options: MIN_RENTAL_PERIOD_OPTIONS,
    },
  ];

  public carForm: FormGroup<CreateCarForm>;

  constructor(
    private store: Store,
    private carService: CarService,
    private autoparkFacade: AutoparkFacade,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.autoparkFacade.activeAutopark$.pipe(takeUntil(this.destroy$)).subscribe(autopark => {
      this.activeAutopark.set(autopark);
    });
    this.activeRoute.params
      .pipe(
        tap(() => {
          this.carForm = this.initializeForm();
          this.editMode.set(false);
        }),
        filter(params => Boolean(params['id'])),
        switchMap(params => this.carService.getCarProfile(+params['id'])),
        tap(car => {
          console.log(car);
          this.fillForm(car);
          this.editMode.set(true);
          console.log(this.carForm.value);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  // TODO: REWORK THIS METHOD
  public onSubmit(): void {
    console.log(this.carForm.value);
    console.log(this.filesComponent.files$.getValue());
    console.log(this.filesComponent.filesPreview$.getValue());
    const files = this.filesComponent.files$.getValue();
    const car = {
      ...this.carForm.value,
      fuel: this.carForm.controls.fuelType.value as Fuel,
      autoparkId: this.activeAutopark()?.id,
      images: files,
      financialInfo: ['Без залога', 'Без коммисии'],
      rentalConditions: ['Паспорт', 'Водителькое удостворение'],
    } as CreateCar;
    console.log(car);

    const data = new FormData();
    Object.keys(car).forEach((key: string) => {
      // @ts-ignore
      console.log(car[key]);
      console.log(key);
      // @ts-ignore
      if (Array.isArray(car[key])) {
        // @ts-ignore
        car[key].forEach(element => {
          const value: string = element.toString();
          data.append(key, value);
        });
      } else {
        // @ts-ignore
        const value: string = car[key].toString();
        data.append(key, value);
      }
    });

    files.forEach(file => {
      data.append('images', file);
    });

    let carObserver: Observable<CarCard>;
    if (!this.editMode()) {
      carObserver = this.carService.createCar(data);
    } else {
      carObserver = this.carService.updateCar(car.id!, car);
    }

    carObserver.subscribe(res => {
      this.router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.AUTOPARK_CONTROL, ControlPanel.CARS_TABLE]);
    });
  }

  public getCurrentYear(): number {
    return new Date().getFullYear();
  }

  public deleteCar(): void {
    this.carService.deleteCar(this.carForm.value.id!).subscribe(() => {
      console.log('deleted');
    });
  }

  private initializeForm(): FormGroup<CreateCarForm> {
    return new FormGroup<CreateCarForm>(<CreateCarForm>{
      id: new FormControl<number | null>(null),
      brand: new FormControl<string>('', [Validators.required]),
      model: new FormControl<string>('', [Validators.required]),
      price: new FormControl<number>(0, [Validators.required]),
      financialInfo: new FormControl<string[]>([]),
      rentalConditions: new FormControl<string[]>([]),
      additionalInfo: new FormControl<string[]>([]),
      yearOfRelease: new FormControl<number | null>(null, [Validators.required]),
      transmission: new FormControl<string>('', [Validators.required]),
      fuelType: new FormControl<string>('', [Validators.required]),
      enginePower: new FormControl<number | null>(null, [Validators.required]),
      type: new FormControl<string>('', [Validators.required]),
      rentSchedule: new FormControl<string>('', [Validators.required]),
      minRentPeriod: new FormControl<number>(0, [Validators.required]),
    });
  }

  private fillForm(carCard: CarCard): void {
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
      rentalConditions: carCard.autopark.rentalConditions,
      images: carCard.photos,
    });

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
