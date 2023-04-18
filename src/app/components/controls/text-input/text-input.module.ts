import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { BaseControl } from '@models';
import { ControlWrapperModule } from '../control-wrapper/control-wrapper.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ControlWrapperModule,
  ],
  declarations: [
    TextInputComponent,
    BaseControl
  ],
  exports: [
    TextInputComponent
  ]
})
export class TextInputModule {
}
