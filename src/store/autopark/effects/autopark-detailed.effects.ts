import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';

import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';


import { AutoparkService, CarService } from '@services';
import { LoadingTypes } from '@constants';
import { CarCard } from '@models';

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
    ofType( loadAutoparkDetailed ),
    switchMap( ({ autoparkId }) => this.autoparkService.getAutoparkById( autoparkId ) ),
    map( (autoparkDetailed) => loadAutoparkDetailedSuccess( { autoparkDetailed } ) ),
    catchError( (error: HttpErrorResponse) => of( loadAutoparkDetailedFailure( { errors: error.error.message } ) ) ),
  ) );

  public loadAutoparkCars$ = createEffect( () => this.actions$.pipe(
    ofType( loadAutoparkCars ),
    withLatestFrom(
      this.store.select( selectAutoparkDetailed ),
      this.store.select( selectAutoparkCarsPage )
    ),
    switchMap( ([_, autopark, page]) => this.carService.getAutoparkCars( autopark, page ) ),
    map( (cars: CarCard[]) => loadAutoparkCarsSuccess( { cars } ) ),
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