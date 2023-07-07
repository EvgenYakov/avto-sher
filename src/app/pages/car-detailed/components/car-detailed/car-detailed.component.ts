import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, Subject, takeUntil } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { AppRoutes, LoadingTypes, MainRoutes } from '@constants';
import { BreadcrumbService } from '@services';
import { CarCard, CarProfile } from '@models';
import { loadCar, selectAutoparkCars, selectCarProfile, selectLoading } from '@store';
import { BonusComponent, SpinnerComponent } from '@components';


import { RESPONSIVE_OPTIONS } from '../../constants';
import { AUTO_DETAILED_DEPS } from './car-detailed.dependencies';

@Component( {
  selector: 'app-car-detailed',
  templateUrl: './car-detailed.component.html',
  styleUrls: ['./car-detailed.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AUTO_DETAILED_DEPS, BonusComponent, SpinnerComponent]
} )
export class CarDetailedComponent implements OnInit, OnDestroy {

  public carProfile$: Observable<CarProfile>;
  public autoparkCars$: Observable<CarCard[]>;
  public isLoading$: Observable<boolean>;

  public readonly responsiveOptions = RESPONSIVE_OPTIONS;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {}


  ngOnInit(): void {
    this.getQueryParams();
    this.getDataFromStore();
  }

  private getQueryParams(): void {
    this.activatedRoute.params.pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (params) => {
      const carId = params['id'];
      this.store.dispatch( loadCar( { carId } ) );
      this.setBreadcrumbs( carId );
    } );
  }

  private getDataFromStore(): void {
    this.isLoading$ = this.store.select( selectLoading, { type: LoadingTypes.CAR_DETAILED } );
    this.carProfile$ = this.store.select( selectCarProfile );
    this.autoparkCars$ = this.store.select( selectAutoparkCars );
  }

  private setBreadcrumbs(autoId: number): void {
    const breadcrumb: MenuItem = {
      label: 'Автомобиль',
      routerLink: `${ AppRoutes.MAIN }/${ MainRoutes.AUTO_DETAILED }/${ autoId }`
    };
    this.breadcrumbService.addBreadcrumb( breadcrumb );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
