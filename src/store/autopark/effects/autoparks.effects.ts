import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map, switchMap, withLatestFrom } from 'rxjs';

import { AutoparkService } from '@services';
import { LoadingTypes } from '@constants';

import {
  loadAuctionAutoparksByRegion,
  loadAuctionAutoparksByRegionSuccess,
  loadAutoparks,
  loadAutoparksSuccess,
} from '../actions';
import { addLoading, removeLoading } from '../../shared';
import { selectCarsLimit, selectCarsPage } from '../../car';
import { selectAutoparksLimit, selectAutoparksPage } from '../selectors';

@Injectable()
export class AutoparksEffects {

  constructor(
    private actions$: Actions,
    private autoparkService: AutoparkService,
    private store: Store
  ) {}


  public loadAuctionAutoparksByRegion = createEffect( () => this.actions$.pipe(
    ofType( loadAuctionAutoparksByRegion ),
    switchMap( ({ regionName }) => this.autoparkService.getAuctionAutoparksByRegion( regionName ) ),
    map( (auctionAutoparks) => loadAuctionAutoparksByRegionSuccess( { auctionAutoparks } ) ),
  ) );

  public loadAutoparks = createEffect( () => this.actions$.pipe(
    ofType( loadAutoparks ),
    withLatestFrom(
      this.store.select( selectAutoparksPage ),
      this.store.select( selectAutoparksLimit ),
    ),
    switchMap( ([{ regionName }, page, limit]) => this.autoparkService.getAutoparksList( page, limit, regionName ) ),
    map( (autoparkPagination) => loadAutoparksSuccess( {
      autoparks: autoparkPagination.data,
      pagesLeft: autoparkPagination.metadata.pagesLeft
    } ) ),
  ) );


  public addLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadAuctionAutoparksByRegion,
        loadAutoparks
      ),
      map( () => addLoading( { addLoading: LoadingTypes.AUTOPARKS } ) )
    )
  );

  public removeLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadAuctionAutoparksByRegionSuccess,
        loadAutoparksSuccess
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.AUTOPARKS } ) )
    )
  );
}