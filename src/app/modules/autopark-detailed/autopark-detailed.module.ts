import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabViewModule } from 'primeng/tabview';

import { AutoparkDetailedRoutingModule } from './autopark-detailed-routing.module';
import { AutoparkDetailedComponent } from './autopark-detailed.component';
import { AutoparkHatComponent } from './components/hat/autopark-hat.component';
import { SubInfoPanelComponent } from './components/sub-info-panel/sub-info-panel.component';

import { AutoCardModule, LoadMoreModule, ReviewCardModule, SpinnerModule } from '@components';


@NgModule({
  declarations: [
    AutoparkDetailedComponent,
    AutoparkHatComponent,
    SubInfoPanelComponent
  ],
  imports: [
    CommonModule,
    AutoparkDetailedRoutingModule,
    TabViewModule,
    LoadMoreModule,
    AutoCardModule,
    SpinnerModule,
    ReviewCardModule
  ]
})
export class AutoparkDetailedModule {
}
