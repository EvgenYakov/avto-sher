import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoparkDetailedRoutingModule } from './autopark-detailed-routing.module';
import { AutoparkDetailedComponent } from './autopark-detailed.component';
import { AutoparkHatComponent } from './components/hat/autopark-hat.component';
import { TabViewModule } from 'primeng/tabview';
import { SubInfoPanelComponent } from './components/sub-info-panel/sub-info-panel.component';
import { LoadMoreModule } from '../../components/load-more/load-more.module';
import { AutoCardModule, ReviewAutoparkCardModule } from '@components';
import { SpinnerModule } from '../../components/spinner/spinner.module';


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
    ReviewAutoparkCardModule
  ]
})
export class AutoparkDetailedModule { }
