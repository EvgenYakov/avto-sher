import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlWrapperComponent } from './control-wrapper.component';



@NgModule({
  declarations: [
    ControlWrapperComponent
  ],
  exports: [
    ControlWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ControlWrapperModule { }
