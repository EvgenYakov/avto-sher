import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadMoreComponent } from './load-more.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    LoadMoreComponent
  ],
  exports: [
    LoadMoreComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class LoadMoreModule { }
