import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterModule, HeaderModule } from '@layout';
import { AutoCardModule, AutoFilterModule, } from '@components';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { StartPageComponent } from './components/start-page/start-page.component';

@NgModule({
    declarations: [MainComponent, StartPageComponent],
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
