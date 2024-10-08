import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { AppRoutes, LoadingTypes } from '@constants';
import { CarCard } from '@models';
import { Store } from '@ngrx/store';
import { BreadcrumbService } from '@services';
import {
  getCarsEntities,
  loadCars,
  loadMoreCars,
  selectCarsPagesLeft,
  selectCurrentRegion,
  selectLoading,
} from '@store';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';

import { CARS_DEPS } from './cars.dependencies';

@Component({
  selector: 'app-cars',
  standalone: true,
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  imports: [CARS_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsComponent implements OnInit, OnDestroy {
  public cars$: Observable<CarCard[]>;
  public isLoading$: Observable<boolean>;

  public isLoadMore$ = new BehaviorSubject(true);

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.getDataFromStore();
    this.setBreadcrumbs();
  }

  public loadMore(): void {
    this.store
      .select(selectCurrentRegion)
      .pipe(takeUntil(this.destroy$))
      .subscribe(region => {
        this.store.dispatch(loadMoreCars({ regionName: region.name }));
      });
  }

  private setBreadcrumbs(): void {
    const breadcrumb: MenuItem = {
      label: 'Автомобили',
      routerLink: `${AppRoutes.MAIN}/${AppRoutes.CARS}`,
    };
    this.breadcrumbService.addBreadcrumb(breadcrumb);
  }

  private getDataFromStore(): void {
    this.cars$ = this.store.select(getCarsEntities);
    this.store
      .select(selectCarsPagesLeft)
      .pipe(takeUntil(this.destroy$))
      .subscribe(count => {
        if (count < 1) {
          this.isLoadMore$.next(false);
        }
      });
    this.isLoading$ = this.store.select(selectLoading, { type: LoadingTypes.CARS_LIST });

    this.getCars();
  }

  private getCars(): void {
    this.store
      .select(selectCurrentRegion)
      .pipe(takeUntil(this.destroy$))
      .subscribe(region => {
        this.store.dispatch(loadCars({ regionName: region.name }));
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
