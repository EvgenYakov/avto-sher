import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppRoutes, EMAIL_FIELD, PASSWORD_FIELD, PHONE_FIELD, REQUIRED_FIELD } from '@constants';
import { Store } from '@ngrx/store';
import { AuthState, registerRequest, selectAuthErrors } from '@store';
import { TabViewChangeEvent } from 'primeng/tabview';
import { Observable } from 'rxjs';

import { RegisterType } from '../../constants';
import { IRegisterDto, IRegistrationForm } from '../../models';

import { REGISTRATION_DEPS } from './registration.dependencies';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [REGISTRATION_DEPS],
})
export class RegistrationComponent implements OnInit {
  public readonly requiredField = REQUIRED_FIELD;
  public readonly emailField = EMAIL_FIELD;
  public readonly phoneField = PHONE_FIELD;
  public readonly passwordField = PASSWORD_FIELD;

  public errors$: Observable<string>;

  public checkbox = false;
  public activeIndex = 0;

  public registerForm: FormGroup<IRegistrationForm>;

  protected readonly AppRoutes = AppRoutes;
  private registerType = RegisterType.DRIVER;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AuthState>
  ) {}

  public ngOnInit(): void {
    this.registerForm = this.initializeForm();
    // this.onTabChanged( { originalEvent: null, index: 0 } );
    this.errors$ = this.store.select(selectAuthErrors);
  }

  public navigateBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  public onSubmit(): void {
    const formValues = {
      ...this.registerForm.value,
      role: this.registerType,
    } as IRegisterDto;

    this.store.dispatch(registerRequest({ registerDto: formValues }));
  }

  public onTabChanged({ index }: TabViewChangeEvent): void {
    this.checkbox = false;
    this.activeIndex = index;

    if (index === 0) {
      this.registerForm.controls.phoneNumber.addValidators([Validators.required]);
      this.registerType = RegisterType.DRIVER;
    } else if (index === 1) {
      this.registerForm.controls.phoneNumber.clearValidators();
      this.registerType = RegisterType.AUTOPARK;
    }
    this.registerForm.controls.phoneNumber.updateValueAndValidity();
  }

  private initializeForm(): FormGroup<IRegistrationForm> {
    const registerFormGroup = new FormGroup<IRegistrationForm>(<IRegistrationForm>{
      fullName: new FormControl<string>('', [Validators.required]),
      phoneNumber: new FormControl<string>(''),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });

    return registerFormGroup;
  }

}
