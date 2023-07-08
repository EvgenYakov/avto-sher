import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs';

import { AutoparkService } from '@services';
import { LoadingTypes } from '@constants';

import { loadAuctionAutoparksByRegion, loadAuctionAutoparksByRegionSuccess, } from '../actions';
import { addLoading, removeLoading } from '../../shared';

@Injectable()
export class AutoparksEffects {

  constructor(
    private actions$: Actions,
    private autoparkService: AutoparkService,
  ) {}


  public loadAuctionAutoparksByRegion = createEffect( () => this.actions$.pipe(
    ofType( loadAuctionAutoparksByRegion ),
    switchMap( ({ regionName }) => this.autoparkService.getAuctionAutoparksByRegion( regionName ) ),
    map( (auctionAutoparks) => loadAuctionAutoparksByRegionSuccess( { auctionAutoparks } ) ),
  ) );

  public addLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadAuctionAutoparksByRegion
      ),
      map( () => addLoading( { addLoading: LoadingTypes.AUTOPARKS } ) )
    )
  );

  public removeLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadAuctionAutoparksByRegionSuccess,
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.AUTOPARKS } ) )
    )
  );
}