import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { loadAuctionAutoparksByRegion, selectAuctionAutoparks, selectAutoparksRegions, selectLoading } from '@store';
import { AppRoutes, LoadingTypes, MainRoutes } from '@constants';

import { START_PAGE_DEPS } from './start-page.dependencies';
import { Observable } from 'rxjs';
import { AuctionAutoparks } from '@models';

@Component( {
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  standalone: true,
  imports: [START_PAGE_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class StartPageComponent implements OnInit {

  constructor(
    private store: Store,
    private router: Router
  ) {}

  public auctionAutoparks$: Observable<AuctionAutoparks>;
  public isLoading$: Observable<boolean>;

  ngOnInit(): void {
    this.getDataFromStore();
    this.getAuctionAutoparksByRegionAutoparksCount();
  }

  public navigateToDetailed(autoparkId: number): void {
    this.router.navigate( [AppRoutes.MAIN + '/' + MainRoutes.AUTOPARK_DETAILED, autoparkId] );
  }

  private getAuctionAutoparksByRegionAutoparksCount(): void {
    this.store.select( selectAutoparksRegions )
    .subscribe( (regions) => {
      if(regions.length > 0) {
        this.store.dispatch( loadAuctionAutoparksByRegion( { regionName: regions[0].name } ) );
      }
    } );
  }

  private getDataFromStore(): void {
    this.auctionAutoparks$ = this.store.select( selectAuctionAutoparks );
    this.isLoading$ = this.store.select( selectLoading, { type: LoadingTypes.AUTOPARKS } );
  }
}
