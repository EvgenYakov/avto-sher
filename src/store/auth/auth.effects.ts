import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { catchError, map, of, switchMap, tap } from 'rxjs';

import {
  loginRequest,
  loginRequestFailure,
  loginRequestSuccess,
  refreshTokenRequest,
  refreshTokenRequestFailure,
  refreshTokenRequestSuccess,
  registerRequest,
  registerRequestFailure,
  registerRequestSuccess,
  unauthorized
} from './auth.actions';

import { LocalStorageKeys } from '@constants';
import { LocalStorageService } from '@services';

import { AuthService } from '../../app/layouts/auth';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private localStorageService: LocalStorageService
  ) {
  }

  public loginRequest$ = createEffect( () => this.actions$.pipe(
    ofType( loginRequest ),
    switchMap( ({ loginDto }) => this.authService.login( loginDto ) ),
    map( (authResponse) => loginRequestSuccess( { authResponse } ) ),
    catchError( (error: HttpErrorResponse) =>
      of( loginRequestFailure( { backendError: error.error } ) )
    )
  ) );

  public registerRequest$ = createEffect( () => this.actions$.pipe(
    ofType( registerRequest ),
    switchMap( ({ registerDto }) => this.authService.registration( registerDto ) ),
    map( (authResponse) => registerRequestSuccess( { authResponse } ) ),
    catchError( (error: HttpErrorResponse) =>
      of( registerRequestFailure( { backendError: error.error } ) )
    )
  ) );

  public refreshToken$ = createEffect( () => this.actions$.pipe(
    ofType( refreshTokenRequest ),
    switchMap( () => this.authService.refreshToken() ),
    map( (newAccessToken) => {
      this.localStorageService.setItemFromStorage( LocalStorageKeys.ACCESS_TOKEN, newAccessToken );
      return refreshTokenRequestSuccess( { newAccessToken } );
    } ),
    catchError( (error: HttpErrorResponse) => {
      if ( error.status === 401 ) {
        return of( unauthorized() );
      }
      return of( refreshTokenRequestFailure( { backendError: error.error } ) );
    } )
  ) );

  public unauthorized$ = createEffect( () => this.actions$.pipe(
      ofType( unauthorized ),
      tap( () => {
        this.authService.logout();
        this.localStorageService.removeItemFromStorage( LocalStorageKeys.ACCESS_TOKEN );
        this.router.navigate( ['/login'] );
      } )
    ),
    { dispatch: false }
  );
}