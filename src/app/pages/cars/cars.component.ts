import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject, takeUntil } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { Store } from '@ngrx/store';

import { CarCard } from '@models';
import { getCarsEntities, loadCars, loadMoreCars, selectCurrentRegion, selectLoading } from '@store';
import { BreadcrumbService } from '@services';
import { AppRoutes, LoadingTypes } from '@constants';

import { CARS_DEPS } from './cars.dependencies';

@Component( {
  selector: 'app-cars',
  standalone: true,
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  imports: [CARS_DEPS],
} )
export class CarsComponent implements OnInit, OnDestroy {

  public cars$: Observable<CarCard[]>;
  public isLoading$: Observable<boolean>;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private breadcrumbService: BreadcrumbService,
  ) {}

  ngOnInit(): void {
    this.getDataFromStore();
    this.setBreadcrumbs();
  }

  public loadMore(): void {
    this.store.select( selectCurrentRegion ).pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (region) => {
      this.store.dispatch( loadMoreCars( { regionName: region.name } ) );
    } );
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

    this.getCars();
  }

  private getCars(): void {
    this.store.select( selectCurrentRegion ).pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (region) => {
      this.store.dispatch( loadCars( { regionName: region.name } ) );
    } );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
