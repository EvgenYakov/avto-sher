import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoparkCardComponent } from './autopark-card.component';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AutoparkCardComponent
  ],
  exports: [
    AutoparkCardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RatingModule,
    ReactiveFormsModule
  ]
})
export class AutoparkCardModule { }
