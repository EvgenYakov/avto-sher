import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoparkProfileRoutingModule } from './autopark-profile-routing.module';
import { AutoparkProfileComponent } from './autopark-profile.component';
import { AutoparkHatComponent } from './components/hat/autopark-hat.component';
import { TabViewModule } from 'primeng/tabview';
import { SubInfoPanelComponent } from './components/sub-info-panel/sub-info-panel.component';
import { LoadMoreModule } from '../../components/load-more/load-more.module';
import { AutoCardModule } from '@components';


@NgModule({
  declarations: [
    AutoparkProfileComponent,
    AutoparkHatComponent,
    SubInfoPanelComponent
  ],
  imports: [
    CommonModule,
    AutoparkProfileRoutingModule,
    TabViewModule,
    LoadMoreModule,
    AutoCardModule
  ]
})
export class AutoparkProfileModule { }
