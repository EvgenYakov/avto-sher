import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { LoginDto, LoginForm } from '../../models/login-form.interface';
import { EMAIL_FIELD, PASSWORD_FIELD } from '@constants';
import { AuthState, loginRequest } from '@store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public readonly requiredMsg = EMAIL_FIELD;
  public readonly passwordMsg = PASSWORD_FIELD;

  public loginForm: FormGroup<LoginForm>;

  constructor(private store: Store<AuthState>) {
  }

  public ngOnInit(): void {
    this.loginForm = this.initializeForm();
  }

  private initializeForm(): FormGroup<LoginForm> {
    const formGroup = new FormGroup<LoginForm>(<LoginForm>{
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })

    return formGroup;
  }

  public forgetPassword(): void {

  }

  public onSubmit(): void {
    const formValues = this.loginForm.value as LoginDto;
    this.store.dispatch(loginRequest({ loginDto: formValues }));
  }
}
