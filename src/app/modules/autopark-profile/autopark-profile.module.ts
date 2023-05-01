import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoparkProfileRoutingModule } from './autopark-profile-routing.module';
import { AutoparkProfileComponent } from './autopark-profile.component';
import { AutoparkHatComponent } from './components/hat/autopark-hat.component';
import { TabViewModule } from 'primeng/tabview';
import { SubInfoPanelComponent } from './components/sub-info-panel/sub-info-panel.component';


@NgModule({
  declarations: [
    AutoparkProfileComponent,
    AutoparkHatComponent,
    SubInfoPanelComponent
  ],
  imports: [
    CommonModule,
    AutoparkProfileRoutingModule,
    TabViewModule
  ]
})
export class AutoparkProfileModule { }
