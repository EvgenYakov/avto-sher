import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

import { AutoCardDetailedComponent } from '@components';

@NgModule({
  declarations: [AutoCardDetailedComponent],
  imports: [CommonModule, GalleriaModule, ButtonModule],
  exports: [AutoCardDetailedComponent],
})
export class AutoCardDetailedModule {}
