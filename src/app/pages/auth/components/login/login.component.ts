import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EMAIL_FIELD, PASSWORD_FIELD } from '@constants';
import { Store } from '@ngrx/store';
import { loginRequest, selectAuthErrors } from '@store';

import { LoginDto, LoginForm } from '../../models';

import { LOGIN_DEPS } from './login.dependencies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LOGIN_DEPS],
})
export class LoginComponent implements OnInit {
  private store = inject(Store);

  public backendError$ = this.store.select(selectAuthErrors);

  public readonly requiredMsg = EMAIL_FIELD;
  public readonly passwordMsg = PASSWORD_FIELD;

  public loginForm: FormGroup<LoginForm>;

  public ngOnInit(): void {
    this.loginForm = this.initializeForm();
  }

  private initializeForm(): FormGroup<LoginForm> {
    const formGroup = new FormGroup<LoginForm>(<LoginForm>{
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    });

    return formGroup;
  }

  /*TODO: add logic for forget password*/
  public forgetPassword(event: Event): void {
    event.preventDefault();
  }

  public onSubmit(): void {
    const formValues = <LoginDto>this.loginForm.value;
    this.store.dispatch(loginRequest({ loginDto: formValues }));
  }
}
