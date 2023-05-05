import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import {
  addLoading,
  loadAutoparkDetailed,
  loadAutoparkDetailedFailure,
  loadAutoparkDetailedSuccess,
  LoadingState,
  removeLoading
} from '@store';
import { AutoparkService } from '@services';
import { Store } from '@ngrx/store';
import { LoadingTypes } from '@constants';

@Injectable()
export class AutoparkDetailedEffects {
  constructor(
    private actions$: Actions,
    private autoparkService: AutoparkService,
    private store: Store<LoadingState>
  ) {
  }

  public loadAutoparkDetailed$ = createEffect(() => this.actions$.pipe(
    ofType(loadAutoparkDetailed),
    tap(() => this.store.dispatch(addLoading({ addLoading: LoadingTypes.AUTOPARK_DETAILED }))),
    switchMap(({ autoparkId }) => this.autoparkService.getAutoparkById(autoparkId)),
    map((autoparkDetailedResponse) => {
      this.store.dispatch(removeLoading({ removeLoading: LoadingTypes.AUTOPARK_DETAILED }));
      return loadAutoparkDetailedSuccess({ autoparkDetailedResponse })
    }),
    catchError((error: HttpErrorResponse) => {
        this.store.dispatch(removeLoading({ removeLoading: LoadingTypes.AUTOPARK_DETAILED }));
        return of(loadAutoparkDetailedFailure({ errors: error }))
      }
    ),
  ));

  // public loading$ = createEffect(() => this.actions$.pipe(
  //     ofType(loadAutoparkDetailed),
  //     tap(() => this.store.dispatch(addLoading({ addLoading: LoadingTypes.AUTOPARK_DETAILED }))),
  //   )
  // );

}