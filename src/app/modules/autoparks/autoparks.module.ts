import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoparksRoutingModule } from './autoparks-routing.module';
import { AutoparksComponent } from './autoparks/autoparks.component';


@NgModule({
    imports: [
        CommonModule,
        AutoparksRoutingModule,
        AutoparksComponent
    ]
})
export class AutoparksModule { }
