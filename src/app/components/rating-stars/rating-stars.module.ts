import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingStarsComponent } from './rating-stars.component';
import { PaginatorModule } from 'primeng/paginator';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RatingStarsComponent
  ],
  exports: [
    RatingStarsComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    RatingModule,
    ReactiveFormsModule
  ]
})
export class RatingStarsModule { }
