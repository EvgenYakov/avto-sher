import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, Subject, takeUntil } from 'rxjs';

import { loadAuctionAutoparksByRegion, selectAuctionAutoparks, selectCurrentRegion, selectLoading } from '@store';
import { AppRoutes, LoadingTypes, MainRoutes } from '@constants';
import { AuctionAutoparks } from '@models';

import { START_PAGE_DEPS } from './start-page.dependencies';

@Component( {
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  standalone: true,
  imports: [START_PAGE_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class StartPageComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  public auctionAutoparks$: Observable<AuctionAutoparks>;
  public isLoading$: Observable<boolean>;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.getDataFromStore();
  }

  public navigateToDetailed(autoparkId: number): void {
    this.router.navigate( [AppRoutes.MAIN + '/' + MainRoutes.AUTOPARK_DETAILED, autoparkId] );
  }

  private getDataFromStore(): void {
    this.store.select( selectCurrentRegion ).pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (region) => {
      this.store.dispatch( loadAuctionAutoparksByRegion( { regionName: region.name } ) )
    } )
    this.auctionAutoparks$ = this.store.select( selectAuctionAutoparks );
    this.isLoading$ = this.store.select( selectLoading, { type: LoadingTypes.AUTOPARKS } );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
