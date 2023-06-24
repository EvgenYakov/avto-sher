import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { catchError, combineLatest, filter, map, of, switchMap, withLatestFrom } from 'rxjs';


import { AutoparkService, CarService } from '@services';
import { LoadingTypes } from '@constants';

import {
  loadAutoparkCars,
  loadAutoparkCarsFailure,
  loadAutoparkCarsSuccess,
  loadAutoparkDetailed,
  loadAutoparkDetailedFailure,
  loadAutoparkDetailedSuccess
} from '../actions';
import { selectAutoparkCarsPage, selectAutoparkDetailed } from '../selectors';
import { addLoading, removeLoading } from '../../shared';

@Injectable()
export class AutoparkDetailedEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private autoparkService: AutoparkService,
    private carService: CarService,
  ) {}

  public loadAutoparkDetailed$ = createEffect( () => this.actions$.pipe(
    ofType( loadAutoparkDetailed, loadAutoparkCars ),
    withLatestFrom(
      this.store.select( selectAutoparkDetailed )
    ),
    // filter( ([_, data]) => !data ),
    switchMap( ([{ autoparkId }]) => this.autoparkService.getAutoparkById( autoparkId ) ),
    map( (autoparkDetailed) => loadAutoparkDetailedSuccess( { autoparkDetailed } ) ),
    catchError( (error: HttpErrorResponse) => of( loadAutoparkDetailedFailure( { errors: error.error.message } ) ) ),
  ) );

  public loadAutoparkCars$ = createEffect( () => this.actions$.pipe(
    ofType( loadAutoparkCars ),
    withLatestFrom(
      this.store.select( selectAutoparkCarsPage )
    ),
    switchMap( ([{ autoparkId }, page]) =>
      combineLatest( [
        this.carService.getAutoparkCars( autoparkId, page ),
        this.store.select( selectAutoparkDetailed )
      ] ).pipe(
        map( ([cars, autopark]) => {
          const carsWithAutoparkProperties = cars.map( (car) => ({
            ...car,
            autoparkName: autopark.title,
            region: autopark.region
          }) )
          return loadAutoparkCarsSuccess( { cars: carsWithAutoparkProperties } )
        } ),
      )
    ),
    catchError( (error: HttpErrorResponse) => of( loadAutoparkCarsFailure( { errors: error } ) ) )
  ) );

  addLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType( loadAutoparkDetailed ),
      map( () => addLoading( { addLoading: LoadingTypes.AUTOPARK_DETAILED } ) )
    )
  );

  removeLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadAutoparkDetailedSuccess,
        loadAutoparkDetailedFailure
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.AUTOPARK_DETAILED } ) )
    )
  );
}