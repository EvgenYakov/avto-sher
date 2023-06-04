import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { catchError, map, of, switchMap, tap } from 'rxjs';

import {
  accessTokenStatus,
  accessTokenStatusFailure,
  accessTokenStatusSuccess,
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

import { AuthService, LocalStorageService } from '@services';
import { AppRoutes, LoadingTypes, LocalStorageKeys } from '@constants';
import { addLoading, removeLoading } from '../shared';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private localStorageService: LocalStorageService
  ) {}

  public loginRequest$ = createEffect( () => this.actions$.pipe(
    ofType( loginRequest ),
    switchMap( ({ loginDto }) => this.authService.login( loginDto ) ),
    map( (authResponse) => {
      this.localStorageService.addItemToStorage( LocalStorageKeys.ACCESS_TOKEN, authResponse.accessToken );
      return loginRequestSuccess( { authResponse } );
    } ),
    catchError( (error: string) => {
        return of( loginRequestFailure( { backendError: error } ) )
      }
    )
  ) );

  public registerRequest$ = createEffect( () => this.actions$.pipe(
    ofType( registerRequest ),
    switchMap( ({ registerDto }) => this.authService.registration( registerDto ) ),
    map( (authResponse) => {
      this.localStorageService.addItemToStorage( LocalStorageKeys.ACCESS_TOKEN, authResponse.accessToken );
      return registerRequestSuccess( { authResponse } )
    } ),
    catchError( (error: HttpErrorResponse) =>
      of( registerRequestFailure( { backendError: error.error } ) )
    )
  ) );

  public getAccessTokenStatus$ = createEffect( () => this.actions$.pipe(
    ofType( accessTokenStatus ),
    switchMap( () => this.authService.accessTokenStatus() ),
    map( () => accessTokenStatusSuccess() ),
    catchError( () => of( accessTokenStatusFailure() ) )
  ) );

  public refreshToken$ = createEffect( () => this.actions$.pipe(
    ofType( refreshTokenRequest ),
    switchMap( () => this.authService.refreshToken() ),
    map( (authResponse) => {
      this.localStorageService.addItemToStorage( LocalStorageKeys.ACCESS_TOKEN, authResponse.accessToken );
      return refreshTokenRequestSuccess();
    } ),
    catchError( (error: HttpErrorResponse) => {
      if(error.status === 401) {
        this.store.dispatch( unauthorized() );
      }
      return of( refreshTokenRequestFailure() );
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

  public navigate$ = createEffect( () => this.actions$.pipe(
      ofType( loginRequestSuccess, registerRequestSuccess ),
      tap( () => this.router.navigate( [AppRoutes.MAIN] ) )
    ),
    { dispatch: false }
  );

  public addLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loginRequest,
        registerRequest,
        accessTokenStatus
      ),
      map( () => addLoading( { addLoading: LoadingTypes.AUTH } ) )
    )
  );

  public removeLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loginRequestSuccess,
        loginRequestFailure,
        registerRequestSuccess,
        registerRequestFailure,
        accessTokenStatusSuccess,
        accessTokenStatusFailure
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.AUTH } ) )
    )
  );
}