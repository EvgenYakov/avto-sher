import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AuthState, registerRequest } from '@store';
import { EMAIL_FIELD, PASSWORD_FIELD, PHONE_FIELD, REQUIRED_FIELD } from '@constants';

import { RegisterDto, RegistrationForm } from '../../models';
import { RegisterType } from '../../constants';

import { REGISTRATION_DEPS } from './registration.dependencies';

@Component( {
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [REGISTRATION_DEPS]
} )
export class RegistrationComponent implements OnInit {
  public readonly requiredField = REQUIRED_FIELD;
  public readonly emailField = EMAIL_FIELD;
  public readonly phoneField = PHONE_FIELD;
  public readonly passwordField = PASSWORD_FIELD;

  public checkbox = false;
  public activeIndex = 0;

  public registerForm: FormGroup<RegistrationForm>

  private registerType = RegisterType.DRIVER;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AuthState>
  ) {
  }

  public ngOnInit(): void {
    this.registerForm = this.initializeForm();
    this.onTabChanged( { originalEvent: null, index: 0 } );
  }

  public navigateBack(): void {
    this.router.navigate( ['../'], { relativeTo: this.route } );
  }

  public openConfidentiality() {}

  public onSubmit(): void {

    const formValues = {
      ...this.registerForm.value,
      type: this.registerType
    } as RegisterDto;

    this.store.dispatch( registerRequest( { registerDto: formValues } ) );
  }

  public onTabChanged({ index }: { originalEvent: PointerEvent | null, index: number }): void {
    this.checkbox = false;
    if ( index === 0 ) {
      this.registerForm.controls.phone.addValidators( [Validators.required] );
      this.registerType = RegisterType.DRIVER;
    }
    else if ( index === 1 ) {
      this.registerForm.controls.phone.clearValidators();
      this.registerType = RegisterType.AUTOPARK;
    }
    this.registerForm.controls.phone.updateValueAndValidity();
  }

  private initializeForm(): FormGroup<RegistrationForm> {
    const registerFormGroup = new FormGroup<RegistrationForm>( <RegistrationForm>{
      fio: new FormControl<string>( '', [Validators.required] ),
      phone: new FormControl<string>( '' ),
      email: new FormControl<string>( '', [
        Validators.required,
        Validators.email,
      ] ),
      password: new FormControl<string>( '', [
        Validators.required,
        Validators.minLength( 6 )
      ] ),

    } );

    return registerFormGroup;
  }
}
