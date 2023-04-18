import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlWrapperModule } from '../control-wrapper/control-wrapper.module';



@NgModule({
  declarations: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    ReactiveFormsModule,
    ControlWrapperModule
  ]
})
export class DatePickerModule { }
