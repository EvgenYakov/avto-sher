import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectInputComponent } from './multi-select-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlWrapperModule } from '../control-wrapper/control-wrapper.module';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlWrapperModule,
    MultiSelectModule
  ],
  exports: [
    MultiSelectInputComponent
  ],
  declarations: [
    MultiSelectInputComponent
  ]
})
export class MultiSelectInputModule {
}
