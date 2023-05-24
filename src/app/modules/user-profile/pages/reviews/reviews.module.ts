import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { AutoFilterModule, ReviewCardModule } from '@components';



@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    AutoFilterModule,
    ReviewCardModule,
  ]
})
export class ReviewsModule { }
