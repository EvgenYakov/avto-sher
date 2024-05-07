import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuctionAutoparkCardComponent, SpinnerComponent } from '@components';
import { AppRoutes, LoadingTypes, MainRoutes } from '@constants';
import { AutoparkCard } from '@models';
import { Store } from '@ngrx/store';
import { loadAutoparks, selectAutoparksEntities, selectCurrentRegion, selectLoading } from '@store';
import { GalleriaModule } from 'primeng/galleria';
import { Observable, Subject, takeUntil } from 'rxjs';

import { FilterComponent } from './components/car-filter/filter.component';
import { PreviewComponentComponent } from './components';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  standalone: true,
  imports: [
    AuctionAutoparkCardComponent,
    FilterComponent,
    AsyncPipe,
    SpinnerComponent,
    FilterComponent,
    GalleriaModule,
    PreviewComponentComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent implements OnInit, OnDestroy {
  IMAGES: string[] = ['assets/cars/20.jpg', 'assets/cars/21.jpg', 'assets/cars/27)).webp'];

  constructor(
    private store: Store,
    private router: Router
  ) {}

  public auctionAutoparks$: Observable<AutoparkCard[]>;
  public isLoading$: Observable<boolean>;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.getDataFromStore();
  }

  public navigateToDetailed(autoparkId: number): void {
    this.router.navigate([AppRoutes.MAIN + '/' + MainRoutes.AUTOPARK_DETAILED, autoparkId]);
  }

  private getDataFromStore(): void {
    this.store
      .select(selectCurrentRegion)
      .pipe(takeUntil(this.destroy$))
      .subscribe(region => {
        this.store.dispatch(loadAutoparks({ regionName: region.name }));
      });
    this.auctionAutoparks$ = this.store.select(selectAutoparksEntities);
    this.isLoading$ = this.store.select(selectLoading, { type: LoadingTypes.AUTOPARKS });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
