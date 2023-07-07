import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { Store } from '@ngrx/store';

import { CarCard } from '@models';
import { getCarsEntities, loadCars, loadMore, selectLoading } from '@store';
import { BreadcrumbService } from '@services';
import { AppRoutes, LoadingTypes } from '@constants';

import { CARS_DEPS } from './cars.dependencies';
import { CarFilterComponent, SpinnerComponent } from '@components';
import { NgIf } from '@angular/common';

@Component( {
  selector: 'app-cars',
  standalone: true,
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  imports: [CARS_DEPS, CarFilterComponent, NgIf, SpinnerComponent],
} )
export class CarsComponent implements OnInit {

  public cars$: Observable<CarCard[]>;
  public isLoading$: Observable<boolean>;

  constructor(
    private store: Store,
    private breadcrumbService: BreadcrumbService,
  ) {}

  ngOnInit(): void {
    this.store.dispatch( loadCars() );
    this.getDataFromStore();
    this.setBreadcrumbs();
  }

  public loadMore(): void {
    this.store.dispatch( loadMore() );
  }

  private setBreadcrumbs(): void {
    const breadcrumb: MenuItem = {
      label: 'Автомобили',
      routerLink: `${ AppRoutes.MAIN }/${ AppRoutes.CARS }`
    };
    this.breadcrumbService.addBreadcrumb( breadcrumb );
  }

  private getDataFromStore(): void {
    this.cars$ = this.store.select( getCarsEntities );
    this.isLoading$ = this.store.select( selectLoading, { type: LoadingTypes.CARS_LIST } );
  }
}
