import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes, ControlPanel, LoadingTypes, ToasterType } from '@constants';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AutoparkService, CarService } from '@services';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';

import { addBeErrorMessage, addLoading, removeLoading } from '../../shared';
import {
  createAutopark,
  createAutoparkFailure,
  createAutoparkSuccess,
  loadAutoparkCars,
  loadAutoparkCarsFailure,
  loadAutoparkCarsSuccess,
  loadAutoparkDetailed,
  loadAutoparkDetailedFailure,
  loadAutoparkDetailedSuccess,
} from '../actions';
import { selectAutoparkCarsPage, selectAutoparkDetailed } from '../selectors';

@Injectable()
export class AutoparkEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private autoparkService: AutoparkService,
    private carService: CarService,
    private router: Router
  ) {}

  public loadAutoparkDetailed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAutoparkDetailed),
      withLatestFrom(this.store.select(selectAutoparkDetailed)),
      // filter( ([_, data]) => !data ),
      switchMap(([{ autoparkId }]) => this.autoparkService.getAutoparkById(autoparkId)),
      map(autoparkDetailed => loadAutoparkDetailedSuccess({ autoparkDetailed })),
      catchError((error: HttpErrorResponse) => of(loadAutoparkDetailedFailure({ errors: error.error.message })))
    )
  );

  public loadAutoparkCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAutoparkCars),
      withLatestFrom(this.store.select(selectAutoparkCarsPage)),
      switchMap(([{ autoparkId }, page]) => this.carService.getAutoparkCars(autoparkId, page)),
      map(paginationResponse =>
        loadAutoparkCarsSuccess({
          cars: paginationResponse.data,
          pagesLeft: paginationResponse.metadata.pagesLeft,
        })
      ),
      catchError((error: HttpErrorResponse) => of(loadAutoparkCarsFailure({ errors: error })))
    )
  );

  public createAutopark = createEffect(() =>
    this.actions$.pipe(
      ofType(createAutopark),
      switchMap(({ autopark }) =>
        this.autoparkService.createAutopark(autopark).pipe(
          map(autopark => {
            this.router.navigate([
              '/',
              AppRoutes.CONTROL_PANEL,
              ControlPanel.AUTOPARK_CONTROL,
              ControlPanel.AUTOPARK_TABLE,
            ]);
            return createAutoparkSuccess({ autopark });
          }),
          catchError((error: HttpErrorResponse) => {
            this.store.dispatch(addBeErrorMessage({ severity: ToasterType.ERROR, detail: error.error.message }));
            return of(createAutoparkFailure());
          })
        )
      )
    )
  );

  addLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAutoparkDetailed),
      map(() => addLoading({ addLoading: LoadingTypes.AUTOPARK_DETAILED }))
    )
  );

  removeLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAutoparkDetailedSuccess, loadAutoparkDetailedFailure),
      map(() => removeLoading({ removeLoading: LoadingTypes.AUTOPARK_DETAILED }))
    )
  );
}
