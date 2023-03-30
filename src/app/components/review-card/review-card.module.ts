import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from './review-card.component';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';


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
    ReactiveFormsModule,
    CardModule
  ]
})
export class ReviewCardModule { }
