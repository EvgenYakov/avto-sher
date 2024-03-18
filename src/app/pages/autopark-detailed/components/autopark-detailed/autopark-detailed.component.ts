import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppRoutes, LoadingTypes, MainRoutes } from '@constants';
import { AutoparkDetailed, CarCard } from '@models';
import { Store } from '@ngrx/store';
import { BreadcrumbService } from '@services';
import {
  loadAutoparkCars,
  loadAutoparkDetailed,
  selectAutoparkCars,
  selectAutoparkDetailed,
  selectLoading,
} from '@store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { BonusComponent } from '../../../../components/bonus/bonus.component';
import { ProfileComponent } from '../autopark-profile/profile.component';

import { AUTOPARK_DETAILED_DEPS } from './autopark-detailed.dependencies';

@Component({
  selector: 'app-autopark-profile',
  templateUrl: './autopark-detailed.component.html',
  styleUrls: ['./autopark-detailed.component.scss'],
  standalone: true,
  imports: [AUTOPARK_DETAILED_DEPS, JsonPipe, BonusComponent, ProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparkDetailedComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {}

  public isLoading$: Observable<boolean>;
  public autoparkDetailed$: Observable<AutoparkDetailed>;
  public cars$: Observable<CarCard[]>;
  // public reviews: Observable<ReviewUser[]>;

  private autoparkId: number;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.getDataFromStore();
    this.getDataFromRoute();
  }

  public changeActiveIndex(event: { index: number }): void {
    switch (event.index) {
      case 0:
        this.store.dispatch(loadAutoparkCars({ autoparkId: this.autoparkId }));
        break;
    }
  }

  private getDataFromRoute(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.autoparkId = params['id'];
      this.store.dispatch(loadAutoparkDetailed({ autoparkId: this.autoparkId }));
      this.setBreadcrumbs(this.autoparkId);
    });
  }

  private getDataFromStore(): void {
    this.isLoading$ = this.store.select(selectLoading, { type: LoadingTypes.AUTOPARK_DETAILED });
    this.autoparkDetailed$ = this.store.select(selectAutoparkDetailed);
    this.cars$ = this.store.select(selectAutoparkCars);
  }

  private setBreadcrumbs(autoparkId: number): void {
    const breadcrumb = {
      label: 'Автопарк',
      routerLink: `${AppRoutes.MAIN}/${MainRoutes.AUTOPARK_DETAILED}/${autoparkId}`,
    };
    this.breadcrumbService.addBreadcrumb(breadcrumb);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
