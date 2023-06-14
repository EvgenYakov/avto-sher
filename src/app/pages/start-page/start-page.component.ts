import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectAuctionAutoparks, selectLoading } from '@store';
import { AppRoutes, LoadingTypes, MainRoutes } from '@constants';

import { START_PAGE_DEPS } from './start-page.dependencies';

@Component( {
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  standalone: true,
  imports: [START_PAGE_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class StartPageComponent {

  private store = inject( Store );
  private router = inject( Router );

  public auctionAutoparks = this.store.select( selectAuctionAutoparks );
  public isLoading$ = this.store.select( selectLoading, { type: LoadingTypes.AUTOPARKS } )

  public navigateToDetailed(autoparkId: number): void {
    this.router.navigate( [AppRoutes.MAIN + '/' + MainRoutes.AUTOPARK_DETAILED, autoparkId] );
  }
}
