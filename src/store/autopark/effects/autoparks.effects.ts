import { inject, Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import { AutoparkService } from '@services';
import {
  loadAuctionAutoparksByRegion,
  loadAuctionAutoparksByRegionFailure,
  loadAuctionAutoparksByRegionSuccess,
  loadAutoparkRegions,
  loadAutoparkRegionsFailure,
  loadAutoparkRegionsSuccess
} from '../actions';
import {
  accessTokenStatus, accessTokenStatusFailure, accessTokenStatusSuccess,
  loginRequest,
  loginRequestFailure,
  loginRequestSuccess,
  registerRequest, registerRequestFailure,
  registerRequestSuccess
} from '../../auth';
import { addLoading, removeLoading } from '../../shared';
import { LoadingTypes } from '@constants';

@Injectable()
export class AutoparksEffects {

  private actions$ = inject( Actions );
  private autoparkService = inject( AutoparkService );

  public loadAutoparksRegions = createEffect( () => this.actions$.pipe(
    ofType( loadAutoparkRegions ),
    switchMap( () => this.autoparkService.getAutoparksRegions() ),
    map( (regions) => loadAutoparkRegionsSuccess( { regions } ) ),
    catchError( () => of( loadAutoparkRegionsFailure() ) ),
  ) );

  public loadAuctionAutoparksByRegion = createEffect( () => this.actions$.pipe(
    ofType( loadAuctionAutoparksByRegion ),
    switchMap( ({ regionId }) => this.autoparkService.getAuctionAutoparksByRegion( regionId ) ),
    map( (auctionAutoparks) => loadAuctionAutoparksByRegionSuccess( { auctionAutoparks } ) ),
    catchError( () => of( loadAuctionAutoparksByRegionFailure() ) ),
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
        loadAuctionAutoparksByRegionFailure
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.AUTOPARKS } ) )
    )
  );
}