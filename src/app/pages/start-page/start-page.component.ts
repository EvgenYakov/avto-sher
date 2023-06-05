import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { loadAuctionAutoparksByRegion, loadAutoparkRegions, selectAuctionAutoparks, selectLoading } from '@store';

import { START_PAGE_DEPS } from './start-page.dependencies';
import { LoadingTypes } from '@constants';
import { SpinnerComponent } from '@components';

@Component( {
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  standalone: true,
  imports: [START_PAGE_DEPS, SpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class StartPageComponent implements OnInit {

  private store = inject( Store );

  //public topAutoparksCard = topAutoparksCards;
  //public checkedAutoparksCard = checkedAutoparksCards;
  //public newAutoparksCard = newAutoparksCards;

  public auctionAutoparks = this.store.select( selectAuctionAutoparks );
  public isLoading$ = this.store.select(selectLoading, {type: LoadingTypes.AUTOPARKS})

  ngOnInit(): void {
    this.store.dispatch( loadAutoparkRegions() );
    this.store.dispatch( loadAuctionAutoparksByRegion( { regionName: 'Москва' } ) )
  }

}
