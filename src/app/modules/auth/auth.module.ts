import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ButtonModule } from 'primeng/button';
import { PasswordInputModule, PhoneInputModule, SpinnerModule, TextInputModule } from '@components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { BackendErrorsComponent } from './components/backend-errors/backend-errors.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    BackendErrorsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    TextInputModule,
    PasswordInputModule,
    ReactiveFormsModule,
    CheckboxModule,
    PhoneInputModule,
    TabViewModule,
    FormsModule,
    NgOptimizedImage,
    SpinnerModule
  ]
})
export class AuthModule { }
