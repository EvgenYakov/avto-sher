import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoDetailedRoutingModule } from './auto-detailed-routing.module';
import { AutoDetailedComponent } from './auto-detailed.component';
import { AutoCardDetailedModule } from '@components';

@NgModule({
  declarations: [AutoDetailedComponent],
  imports: [CommonModule, AutoDetailedRoutingModule, AutoCardDetailedModule],
})
export class AutoDetailedModule {}
