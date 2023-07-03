import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { Store } from '@ngrx/store';

import { CarCard } from '@models';
import { getCarsEntities, loadAllCars, loadMore, selectCarsPage } from '@store';
import { BreadcrumbService } from '@services';
import { AppRoutes, MainRoutes } from '@constants';

import { CARS_DEPS } from './cars.dependencies';
import { CarFilterComponent } from '@components';

@Component( {
  selector: 'app-cars',
  standalone: true,
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  imports: [CARS_DEPS, CarFilterComponent],
} )
export class CarsComponent implements OnInit {

  public cars: Observable<CarCard[]>;

  constructor(
    private store: Store,
    private breadcrumbService: BreadcrumbService,
  ) {}

  ngOnInit(): void {
    this.store.dispatch( loadAllCars() );
    this.getDataFromStore();
    this.setBreadcrumbs();
  }

  public loadMore(): void {
    this.store.dispatch(loadMore());
  }

  private setBreadcrumbs(): void {
    const breadcrumb: MenuItem = {
      label: 'Автомобили',
      routerLink: `${ AppRoutes.MAIN }/${ MainRoutes.USER_PROFILE }`
    };
    this.breadcrumbService.addBreadcrumb( breadcrumb );
  }

  private getDataFromStore(): void {
    this.cars = this.store.select( getCarsEntities );
  }
}
