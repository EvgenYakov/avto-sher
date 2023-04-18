import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordInputComponent } from './password-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ControlWrapperModule } from '../control-wrapper/control-wrapper.module';

@NgModule({
  declarations: [
    PasswordInputComponent
  ],
  exports: [
    PasswordInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,
    ControlWrapperModule,
  ]
})
export class PasswordInputModule {
}
