import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';

import { AutoparkCardComponent } from './autopark-card.component';

@NgModule({
  declarations: [AutoparkCardComponent],
  exports: [AutoparkCardComponent],
  imports: [CommonModule, CardModule, RatingModule, ReactiveFormsModule],
})
export class AutoparkCardModule {}
