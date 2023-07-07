import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map, skip, switchMap, withLatestFrom } from 'rxjs';

import { AutoparkService } from '@services';
import { LoadingTypes } from '@constants';

import { loadAuctionAutoparksByRegion, loadAuctionAutoparksByRegionSuccess, } from '../actions';
import { addLoading, removeLoading } from '../../shared';
import { selectRegion, setCurrentRegion } from '../../region';

@Injectable()
export class AutoparksEffects {

  constructor(
    private actions$: Actions,
    private autoparkService: AutoparkService,
    private store: Store
  ) {}


  public loadAuctionAutoparksByRegion = createEffect( () => this.actions$.pipe(
    ofType( loadAuctionAutoparksByRegion, setCurrentRegion ),
    withLatestFrom(
      this.store.select( selectRegion )
    ),
    skip(1),
    switchMap( ([_, region]) =>
      this.autoparkService.getAuctionAutoparksByRegion( region.name )
    ),
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