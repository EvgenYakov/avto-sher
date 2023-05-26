import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LoginDto, LoginForm } from '../../models';
import { EMAIL_FIELD, PASSWORD_FIELD } from '@constants';
import { AuthState, loginRequest, selectAuthErrors } from '@store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public backendError: Observable<string>

  public readonly requiredMsg = EMAIL_FIELD;
  public readonly passwordMsg = PASSWORD_FIELD;

  public loginForm: FormGroup<LoginForm>;

  constructor(private store: Store<AuthState>) {
  }

  public ngOnInit(): void {
    this.loginForm = this.initializeForm();
    this.getDataFromStore();
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
    const formValues = <LoginDto>this.loginForm.value;
    console.log(formValues)
    this.store.dispatch(loginRequest({loginDto: formValues}));
  }

  private getDataFromStore(): void {
    this.backendError = this.store.select(selectAuthErrors);
  }
}
