import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewAutoparkCardComponent } from './review-autopark-card.component';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    ReviewAutoparkCardComponent
  ],
  exports: [
    ReviewAutoparkCardComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ReactiveFormsModule,
    CardModule
  ]
})
export class ReviewAutoparkCardModule { }
