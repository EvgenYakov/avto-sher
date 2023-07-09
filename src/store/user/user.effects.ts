import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { LoadingTypes, ToasterType } from '@constants';
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
  deleteProfileAvatarSuccess,
  getMe,
  getMeFailure,
  getMeSuccess
} from './user.actions';
import { addBeErrorMessage, addLoading, removeLoading } from '../shared';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private userService: UserService,
  ) {}

  public changeProfileDescription$ = createEffect( () => this.actions$.pipe(
    ofType( changeProfileDescription ),
    switchMap( ({ info }) => this.userService.changeUserProfileDescription( info ) ),
    map( (description) => changeProfileDescriptionSuccess( { info: description } ) ),
    catchError( (error: HttpErrorResponse) => of( changeProfileDescriptionFailure( { errors: error.error.message } ) ) )
  ) );

  public changeProfileAvatar$ = createEffect( () => this.actions$.pipe(
    ofType( changeProfileAvatar ),
    switchMap( ({ newAvatar }) => this.userService.changeUserAvatar( newAvatar ).pipe(
      map( (response) => changeProfileAvatarSuccess( { avatar: response } ) ),
      catchError( (error: HttpErrorResponse) => {
        this.store.dispatch( addBeErrorMessage( { detail: error.error.message, severity: ToasterType.WARN } ) );
        return of( changeProfileAvatarFailure( { errors: error.error.message } ) )
      } )
    ) ),
  ) );

  public deleteProfileAvatar$ = createEffect( () => this.actions$.pipe(
    ofType( deleteProfileAvatar ),
    switchMap( () => this.userService.deleteUserAvatar().pipe(
      map( () => deleteProfileAvatarSuccess() ),
      catchError( (error: HttpErrorResponse) => {
        this.store.dispatch( addBeErrorMessage( { detail: error.error.message, severity: ToasterType.ERROR } ) );
        return of( deleteProfileAvatarFailure( { errors: error.error.message } ) )
      } )
    ) ),
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

  addUserAvatarLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType( changeProfileAvatar ),
      map( () => addLoading( { addLoading: LoadingTypes.USER_AVATAR } ) )
    )
  );

  removeUserAvatarLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        changeProfileAvatarSuccess,
        changeProfileAvatarFailure,
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.USER_AVATAR } ) )
    )
  );
}