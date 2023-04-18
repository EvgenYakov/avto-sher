import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ControlWrapperModule } from '../control-wrapper/control-wrapper.module';



@NgModule({
  declarations: [
    NumberInputComponent
  ],
  exports: [
    NumberInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputNumberModule,
    ControlWrapperModule
  ]
})
export class NumberInputModule { }
