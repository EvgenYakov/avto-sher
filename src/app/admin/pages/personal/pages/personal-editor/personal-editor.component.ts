import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PasswordInputComponent, PhoneInputComponent, TextInputComponent } from '@components';
import { EMAIL_FIELD, PASSWORD_FIELD, PHONE_FIELD, REQUIRED_FIELD, UserRole } from '@constants';
import { Store } from '@ngrx/store';
import { IRegisterDto, IRegistrationForm } from '@pages';
import { PersonalService } from '@services';
import { AuthState, AutoparkFacade, selectAuthErrors } from '@store';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';
import { Observable } from 'rxjs';

import { UserInfoDialogComponent } from './components';
import { EMessage } from '@models';

@Component({
  selector: 'app-personal-editor',
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
  ],
  templateUrl: './personal-editor.component.html',
  styleUrl: './personal-editor.component.scss',
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

  activeAutoPark = toSignal(this.autoparkFacade.activeAutopark$);
  userInfo = signal<IRegisterDto | null>(null);
  visibleUserInfoPopup = signal<boolean>(false);

  private registerType = UserRole.OPERATOR;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AuthState>,
    private autoparkFacade: AutoparkFacade,
    private personalService: PersonalService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.errors$ = this.store.select(selectAuthErrors);
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
}
