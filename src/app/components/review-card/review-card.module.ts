import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from './review-card.component';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReviewCardComponent
  ],
  exports: [
    ReviewCardComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ReactiveFormsModule
  ]
})
export class ReviewCardModule { }
