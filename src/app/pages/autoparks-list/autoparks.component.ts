import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { LoadMoreComponent, SpinnerComponent } from '@components';
import { AppRoutes, LoadingTypes } from '@constants';
import { AutoparkCard } from '@models';
import { Store } from '@ngrx/store';
import { BreadcrumbService } from '@services';
import { getAutoparksEntities, loadAutoparks, selectCurrentRegion, selectLoading } from '@store';
import { MenuItem } from 'primeng/api';
import { Observable, Subject, takeUntil } from 'rxjs';

import { AutoparkCardComponent, AutoparkFiltersComponent } from './components';

@Component({
  selector: 'app-autoparks-list',
  standalone: true,
  templateUrl: './autoparks.component.html',
  styleUrls: ['./autoparks.component.scss'],
  imports: [AutoparkFiltersComponent, LoadMoreComponent, AutoparkCardComponent, AsyncPipe, SpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparksComponent implements OnInit, OnDestroy {
  public autoparks$: Observable<AutoparkCard[]>;
  public isLoading$: Observable<boolean>;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.setBreadcrumbs();
    this.getDataFromStore();
  }

  private setBreadcrumbs(): void {
    const breadcrumb: MenuItem = {
      label: 'Автопарки',
      routerLink: `${AppRoutes.MAIN}/${AppRoutes.AUTOPARKS}`,
    };
    this.breadcrumbService.addBreadcrumb(breadcrumb);
  }

  private getDataFromStore(): void {
    this.autoparks$ = this.store.select(getAutoparksEntities);

    this.isLoading$ = this.store.select(selectLoading, { type: LoadingTypes.AUTOPARKS });

    this.getAutoparks();
  }

  private getAutoparks(): void {
    this.store
      .select(selectCurrentRegion)
      .pipe(takeUntil(this.destroy$))
      .subscribe(region => {
        this.store.dispatch(loadAutoparks({ regionName: region.name }));
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
