import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PasswordInputComponent, PhoneInputComponent, TextInputComponent } from '@components';
import {
  AppRoutes,
  ControlPanel,
  EMAIL_FIELD,
  PASSWORD_FIELD,
  PHONE_FIELD,
  REQUIRED_FIELD,
  UserRole,
} from '@constants';
import { DestroyDirective } from '@directives';
import { EMessage, UserProfile } from '@models';
import { Store } from '@ngrx/store';
import { IRegisterDto, IRegistrationForm } from '@pages';
import { PersonalService } from '@services';
import { AuthState, AutoparkFacade, selectAuthErrors } from '@store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { catchError, filter, map, Observable, takeUntil, tap } from 'rxjs';

import { UserInfoDialogComponent } from './components';

@Component({
  selector: 'app-personal-editor',
  templateUrl: './personal-editor.component.html',
  styleUrl: './personal-editor.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    PasswordInputComponent,
    PhoneInputComponent,
    TabViewModule,
    TextInputComponent,
    ReactiveFormsModule,
    UserInfoDialogComponent,
    InputMaskModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalEditorComponent implements OnInit {
  readonly requiredField = REQUIRED_FIELD;
  readonly emailField = EMAIL_FIELD;
  readonly phoneField = PHONE_FIELD;
  readonly passwordField = PASSWORD_FIELD;

  errors$: Observable<string>;

  checkbox = false;

  registerForm: FormGroup<IRegistrationForm> = new FormGroup<IRegistrationForm>({
    fullName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    phoneNumber: new FormControl<string>('', { nonNullable: true }),
    email: new FormControl<string>('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    }),
  });

  readonly activeAutoPark = toSignal(this.autoparkFacade.activeAutopark$);
  readonly userInfo = signal<IRegisterDto | null>(null);
  readonly visibleUserInfoPopup = signal<boolean>(false);
  readonly editMode = signal<boolean>(false);

  readonly personalList = this.personalService.personalList;

  private registerType = UserRole.OPERATOR;

  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AuthState>,
    private autoparkFacade: AutoparkFacade,
    private personalService: PersonalService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.errors$ = this.store.select(selectAuthErrors);

    this.route.params
      .pipe(
        tap(() => {
          // this.carForm = this.initializeForm();
          this.editMode.set(false);
        }),
        filter(params => Boolean(params['id'])),
        map(params => {
          const userInfo = this.personalList().find(item => item.id === +params['id']);
          if (!userInfo) {
            this.router.navigate([
              '/',
              AppRoutes.CONTROL_PANEL,
              ControlPanel.PERSONAL_CONTROL,
              ControlPanel.PERSONAL_TABLE,
            ]);
          }
          return userInfo ?? null;
        }),
        filter(params => Boolean(params)),
        tap(data => {
          this.fillForm(data!);
          this.userInfo.set({
            id: data!.id,
            email: data!.email ?? '',
            phoneNumber: data!.phoneNumber,
            role: data!.role,
            fullName: data!.fullName,
            password: '',
          });
          this.editMode.set(true);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onSubmit(): void {
    const formValues = {
      ...this.registerForm.value,
      role: this.registerType,
    } as IRegisterDto;
    const autoPark = this.activeAutoPark();

    if (autoPark) {
      this.personalService
        .addOperator({
          ...formValues,
          autoParkId: autoPark.id,
        })
        .subscribe(res => {
          this.messageService.add({
            severity: EMessage.SUCCESS,
            summary: 'Успех',
            detail: 'Сотрудник успешно создан',
          });
          this.userInfo.set(formValues);
          this.visibleUserInfoPopup.set(true);
        });
    } else {
      this.messageService.add({
        severity: EMessage.ERROR,
        summary: 'Ошибка',
        detail: 'Автопарк не определен',
      });
    }
  }

  showConfirmDeletePopup(event: Event): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Вы уверены что сотрудник должен быть удален?',
      header: 'Удаление персонала',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.deletePersonal(this.userInfo()?.id ?? 0);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }

  private deletePersonal(id: number): void {
    this.personalService
      .deleteOperator(id)
      .pipe(
        catchError(err => {
          this.messageService.add({ severity: EMessage.WARN, summary: 'Ошибка', detail: err.message });
          throw new Error(err);
        })
      )
      .subscribe(() => {
        this.messageService.add({ severity: EMessage.SUCCESS, summary: 'Успех', detail: 'Запись удалена' });
      });
  }

  private fillForm(data: UserProfile): void {
    this.registerForm.patchValue({
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
    });
  }
}
