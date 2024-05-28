import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppRoutes, ControlPanel, PHONE_FIELD } from '@constants';
import { DestroyDirective } from '@directives';
import { AutoparkBonus, AutoparkDetailed, ICreateCustomBonus } from '@models';
import { Store } from '@ngrx/store';
import { UserAvatarComponent } from '@pages';
import { AutoparkService } from '@services';
import { createAutoparkSuccess } from '@store';
import { filter, Observable, switchMap, takeUntil, tap } from 'rxjs';

import { BonusesService } from '../../../../../services/http/bonuses.service';

import { CreateAutopark, CreateBaseAutoparkForm } from './models/create-autopark-form.interface';
import { CREATE_AUTOPARK_DEPS } from './create-autopark.dependencies';
import { ICustomBonusForm } from './create-autopark.model';
import { PhoneInputComponent } from '@components';

@Component({
  selector: 'app-create-autopark',
  templateUrl: './create-autopark.component.html',
  styleUrls: ['./create-autopark.component.scss'],
  standalone: true,
  hostDirectives: [DestroyDirective],
  imports: [CREATE_AUTOPARK_DEPS, UserAvatarComponent, PhoneInputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAutoparkComponent implements OnInit {
  bonuses = signal<AutoparkBonus[]>([]);
  customBonuses = signal<ICreateCustomBonus[]>([]);
  avatarPath = signal<string>('');

  autoparkForm: FormGroup<CreateBaseAutoparkForm> = new FormGroup<CreateBaseAutoparkForm>(<CreateBaseAutoparkForm>{
    title: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    address: new FormControl<string>('', [Validators.required]),
    phoneNumber: new FormControl<string>('', [Validators.required]),
    region: new FormControl<string>('', [Validators.required]),
    logo: new FormControl(),
  });

  customBonusForm = new FormGroup<ICustomBonusForm>({
    title: new FormControl<string | null>(null),
    description: new FormControl<string | null>(null),
  });

  bonusArrayControl = new FormControl<number[]>([]);

  readonly editMode = signal<boolean>(false);
  readonly activeAutoPark = signal<AutoparkDetailed | null>(null);

  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private store: Store,
    private autoParkService: AutoparkService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private bonusesService: BonusesService
  ) {}

  ngOnInit(): void {
    // this.autoparkForm = this.initializeForm();
    this.autoParkService.getDefaultBonuses().subscribe(res => {
      this.bonuses.set(res);
    });

    this.activeRoute.params
      .pipe(
        tap(() => {
          // this.carForm = this.initializeForm();
          this.editMode.set(false);
        }),
        filter(params => Boolean(params['id'])),
        switchMap(params => this.autoParkService.getAutoparkById(+params['id'])),
        tap(park => {
          this.fillForm(park);
          this.activeAutoPark.set(park);
          this.editMode.set(true);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onFileSelect(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.autoparkForm.controls.logo.setValue(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        this.avatarPath.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  // TODO: REWORK, OPTIMIZE
  onSubmit(): void {
    // this.store.dispatch(createAutopark({ autopark: this.autoparkForm.value as CreateAutopark }));
    let autoparkRequest: Observable<AutoparkDetailed>;
    console.log(this.autoparkForm.value);
    if (this.activeAutoPark()?.id) {
      autoparkRequest = this.autoParkService.updateAutopark(
        this.activeAutoPark()?.id!,
        this.autoparkForm.value as CreateAutopark
      );
      if (this.autoparkForm.value.logo) {
        this.autoParkService.updateAutoparkLogo(this.autoparkForm.value.logo, this.activeAutoPark()?.id!).subscribe();
      }
    } else {
      autoparkRequest = this.autoParkService.createAutopark(this.autoparkForm.value as CreateAutopark);
    }

    autoparkRequest
      .pipe(
        tap(autopark => {
          this.store.dispatch(createAutoparkSuccess({ autopark }));
          this.router.navigate([
            '/',
            AppRoutes.CONTROL_PANEL,
            ControlPanel.AUTOPARK_CONTROL,
            ControlPanel.AUTOPARK_TABLE,
          ]);
        })
      )
      .subscribe(park => {
        /// TODO: Bonus sistem
        // const customBonuses = this.customBonuses();
        // const bonuses = this.bonuses().filter(item => this.bonusArrayControl.value?.includes(item.id));
        // if (customBonuses.length) {
        //   customBonuses.forEach(bonus => {
        //     // eslint-disable-next-line rxjs/no-nested-subscribe
        //     this.bonusesService.addCustomBonus({ ...bonus, autoParkId: park.id }).subscribe();
        //   });
        // }
        // if (bonuses.length) {
        //   bonuses.forEach(bonus => {
        //     // eslint-disable-next-line rxjs/no-nested-subscribe
        //     this.bonusesService
        //       .addDefaultBonus({
        //         bonusId: bonus.id,
        //         autoParkId: park.id,
        //       })
        //       // eslint-disable-next-line rxjs/no-nested-subscribe
        //       .subscribe();
        //   });
        // }
      });
  }

  navigateToVerification(): void {
    this.router.navigate([
      '/' +
        AppRoutes.CONTROL_PANEL +
        '/' +
        ControlPanel.AUTOPARK_CONTROL +
        '/' +
        ControlPanel.AUTOPARK +
        '/' +
        ControlPanel.VERIFICATION,
    ]);
  }

  // TODO: REWORK BACKEND LOGIC
  addCustomBonus(): void {
    const formValue = this.customBonusForm.value as ICreateCustomBonus;
    // this.bonusesService.creat(id).subscribe(() => {
    //   this.customBonuses.update(list => list.filter(item => item.id === id));
    // });
    this.customBonuses.update(bonuses => [...bonuses, { ...formValue, id: bonuses.length }]);
  }

  deleteBonus(id: number): void {
    // this.bonusesService.deleteBonus({ bonusId: id, autoParkId:  }).subscribe(() => {
    //   this.customBonuses.update(list => list.filter(item => item.id === id));
    // });
    this.customBonuses.update(list => list.filter(item => item.id === id));
  }

  // private initializeForm(): FormGroup<CreateBaseAutoparkForm> {
  //   return new FormGroup<CreateBaseAutoparkForm>(<CreateBaseAutoparkForm>{
  //     title: new FormControl<string>('', [Validators.required]),
  //     description: new FormControl<string>('', [Validators.required]),
  //     address: new FormControl<string>('', [Validators.required]),
  //     region: new FormControl<string>('', [Validators.required]),
  //     logo: new FormControl(),
  //   });
  // }

  private fillForm(park: AutoparkDetailed): void {
    console.log(park);
    this.autoparkForm.patchValue({
      title: park.title,
      description: park.description,
      address: park.address,
      phoneNumber: park.phoneNumber ?? null,
      region: park.region,
    });
    // this.bonuses.set(park.bonuses.filter(item => item.icon));
    this.bonusArrayControl.setValue(park.bonuses.filter(item => item.icon).map(item => item.id));
    this.customBonuses.set(park.bonuses.filter(item => !item.icon));
    this.avatarPath.set(park.logo);
  }

  protected readonly phoneField = PHONE_FIELD;
}
