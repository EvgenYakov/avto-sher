import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { AutoFilterModule, AutoparkCardModule } from '@components';


@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    AutoFilterModule,
    AutoparkCardModule
  ]
})
export class StartPageModule { }
