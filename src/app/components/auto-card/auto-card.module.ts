import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { AutoCardComponent } from '@components';

@NgModule({
  declarations: [AutoCardComponent],
  imports: [CommonModule, ButtonModule, CardModule],
  exports: [AutoCardComponent],
})
export class AutoCardModule {}
