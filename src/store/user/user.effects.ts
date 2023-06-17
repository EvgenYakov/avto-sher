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

}