import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewAutoCardComponent } from './review-auto-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    ReviewAutoCardComponent
  ],
  exports: [
    ReviewAutoCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RatingModule,
    CardModule
  ]
})
export class ReviewAutoCardModule { }
