import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneInputComponent } from './phone-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ControlWrapperModule } from '../control-wrapper/control-wrapper.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputMaskModule,
    FormsModule,
    DropdownModule,
    ControlWrapperModule
  ],
  declarations: [
    PhoneInputComponent
  ],
  exports: [
    PhoneInputComponent
  ]
})
export class PhoneInputModule {
}
