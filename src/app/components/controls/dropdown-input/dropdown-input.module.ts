import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownInputComponent } from './dropdown-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ControlWrapperModule } from '../control-wrapper/control-wrapper.module';



@NgModule({
  declarations: [
    DropdownInputComponent
  ],
  exports: [
    DropdownInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    ControlWrapperModule
  ]
})
export class DropdownInputModule { }
