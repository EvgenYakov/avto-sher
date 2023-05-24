import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ReviewAutoCardComponent } from './components/review-auto-card/review-auto-card.component';
import { ReviewUserCardComponent } from './components/review-user-card/review-user-card.component';
import { RatingDateComponent } from './components/rating-date/rating-date.component';

@NgModule({
  declarations: [
    ReviewAutoCardComponent,
    ReviewUserCardComponent,
    RatingDateComponent
  ],
  exports: [
    ReviewUserCardComponent,
    ReviewAutoCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RatingModule,
    CardModule
  ]
})
export class ReviewCardModule {
}
