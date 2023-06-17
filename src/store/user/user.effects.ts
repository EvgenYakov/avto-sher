import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import {
  changeProfileDescription,
  changeProfileDescriptionFailure,
  changeProfileDescriptionSuccess
} from './user.actions';
import { UserService } from '@services';
import { loadAutoparkDetailed, loadAutoparkDetailedFailure, loadAutoparkDetailedSuccess } from '../autopark';
import { addLoading, removeLoading } from '../shared';
import { LoadingTypes } from '@constants';
import { getMe, getMeFailure, getMeSuccess } from '../auth';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private userService: UserService
  ) {}

  public changeProfileDescription$ = createEffect( () => this.actions$.pipe(
    ofType( changeProfileDescription ),
    switchMap( ({ info }) => this.userService.changeUserProfileDescription( info ) ),
    map( (description) => changeProfileDescriptionSuccess( { info: description } ) ),
    catchError( (error: HttpErrorResponse) =>
      of( changeProfileDescriptionFailure( { errors: error.error.message } ) )
    )
  ) );

  addLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType( getMe ),
      map( () => addLoading( { addLoading: LoadingTypes.PROFILE } ) )
    )
  );

  removeLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        getMeSuccess,
        getMeFailure,
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.PROFILE } ) )
    )
  );
}