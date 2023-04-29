import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

import { AutoDetailedRoutingModule } from './auto-detailed-routing.module';
import { AutoDetailedComponent } from './auto-detailed.component';

@NgModule({
  declarations: [AutoDetailedComponent],
  imports: [
    CommonModule,
    AutoDetailedRoutingModule,
    ButtonModule,
    GalleriaModule,
  ],
})
export class AutoDetailedModule {}
