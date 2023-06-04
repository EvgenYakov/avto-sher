import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import {
  addLoading,
  loadAutoparkDetailed,
  loadAutoparkDetailedFailure,
  loadAutoparkDetailedSuccess,
  removeLoading
} from '@store';
import { AutoparkService } from '@services';
import { LoadingTypes } from '@constants';

@Injectable()
export class AutoparkDetailedEffects {

  private actions$ = inject( Actions );
  private autoparkService = inject( AutoparkService );


  public loadAutoparkDetailed$ = createEffect( () => this.actions$.pipe(
    ofType( loadAutoparkDetailed ),
    switchMap( ({ autoparkId }) => this.autoparkService.getAutoparkById( autoparkId ) ),
    map( (autoparkDetailedResponse) => loadAutoparkDetailedSuccess( { autoparkDetailedResponse } ) ),
    catchError( (error: HttpErrorResponse) => of( loadAutoparkDetailedFailure( { errors: error } ) ) ),
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