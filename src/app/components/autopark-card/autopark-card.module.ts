import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoparkCardComponent } from './autopark-card.component';
import { RatingStarsModule } from '../rating-stars/rating-stars.module';




@NgModule({
  declarations: [
    AutoparkCardComponent
  ],
  exports: [
    AutoparkCardComponent
  ],
  imports: [
    CommonModule,
    RatingStarsModule,
  ]
})
export class AutoparkCardModule { }
