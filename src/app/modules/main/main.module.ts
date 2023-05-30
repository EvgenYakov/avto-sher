import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterModule, HeaderModule } from '@layout';
import { AutoCardModule, AutoFilterModule, } from '@components';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        MainRoutingModule,
        FooterModule,
        HeaderModule,
        AutoFilterModule,
        AutoCardModule,
    ],
})
export class MainModule {
}
