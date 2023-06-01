import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars/cars.component';


@NgModule({
    imports: [
        CommonModule,
        CarsRoutingModule,
        CarsComponent
    ]
})
export class CarsModule { }
