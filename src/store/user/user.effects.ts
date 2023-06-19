import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { LoadingTypes } from '@constants';
import { UserService } from '@services';

import {
  changeProfileAvatar,
  changeProfileAvatarFailure,
  changeProfileAvatarSuccess,
  changeProfileDescription,
  changeProfileDescriptionFailure,
  changeProfileDescriptionSuccess,
  deleteProfileAvatar,
  deleteProfileAvatarFailure,
  deleteProfileAvatarSuccess
} from './user.actions';
import { addLoading, removeLoading } from '../shared';
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

  public changeProfileAvatar$ = createEffect( () => this.actions$.pipe(
    ofType( changeProfileAvatar ),
    switchMap( ({ newAvatar }) => this.userService.changeUserAvatar( newAvatar ) ),
    map( (response) => changeProfileAvatarSuccess( { avatar: response } ) ),
    catchError( (error: HttpErrorResponse) =>
      of( changeProfileAvatarFailure( { errors: error.error.message } ) )
    )
  ) );

  public deleteProfileAvatar$ = createEffect( () => this.actions$.pipe(
    ofType( deleteProfileAvatar ),
    switchMap( () => this.userService.deleteUserAvatar() ),
    map( () => deleteProfileAvatarSuccess() ),
    catchError( (error: HttpErrorResponse) =>
      of( deleteProfileAvatarFailure( { errors: error.error.message } ) )
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