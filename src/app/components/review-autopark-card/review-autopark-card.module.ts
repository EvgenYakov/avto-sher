import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';

import { ReviewAutoparkCardComponent } from './review-autopark-card.component';

@NgModule({
  declarations: [ReviewAutoparkCardComponent],
  exports: [ReviewAutoparkCardComponent],
  imports: [CommonModule, RatingModule, ReactiveFormsModule, CardModule],
})
export class ReviewAutoparkCardModule {}
