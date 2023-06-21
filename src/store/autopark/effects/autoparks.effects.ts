import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import { AutoparkService, LocalStorageService } from '@services';
import { LoadingTypes, LocalStorageKeys } from '@constants';

import {
  loadAuctionAutoparksByRegion,
  loadAuctionAutoparksByRegionFailure,
  loadAuctionAutoparksByRegionSuccess,
  loadAutoparkRegions,
  loadAutoparkRegionsFailure,
  loadAutoparkRegionsSuccess,
  selectRegion
} from '../actions';
import { addLoading, removeLoading } from '../../shared';

@Injectable()
export class AutoparksEffects {

  constructor(
    private actions$: Actions,
    private autoparkService: AutoparkService,
    private localStorageService: LocalStorageService
  ) {}

  public loadRegions = createEffect( () => this.actions$.pipe(
    ofType( loadAutoparkRegions ),
    switchMap( () => this.autoparkService.getAutoparksRegions() ),
    map( (regions) => loadAutoparkRegionsSuccess( { regions } ) ),
    catchError( () => of( loadAutoparkRegionsFailure() ) ),
  ) );

  public loadAuctionAutoparksByRegion = createEffect( () => this.actions$.pipe(
    ofType( loadAuctionAutoparksByRegion ),
    switchMap( ({ regionName }) => this.autoparkService.getAuctionAutoparksByRegion( regionName ) ),
    map( (auctionAutoparks) => loadAuctionAutoparksByRegionSuccess( { auctionAutoparks } ) ),
    catchError( () => of( loadAuctionAutoparksByRegionFailure() ) ),
  ) );

  public selectRegion$ = createEffect( () => this.actions$.pipe(
    ofType( selectRegion ),
    map( ({ region }) => {
      this.localStorageService.addItemToStorage( LocalStorageKeys.REGION, region );
      return loadAuctionAutoparksByRegion( { regionName: region.name } )
    } )
  ) )

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