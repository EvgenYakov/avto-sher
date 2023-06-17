import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  getMe,
  getMeFailure,
  getMeSuccess,
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

  public loginRequest$ = createEffect( () =>
    this.actions$.pipe(
      ofType( loginRequest ),
      switchMap( ({ loginDto }) => this.authService.login( loginDto ).pipe(
        map( (authResponse) => {
          this.localStorageService.addItemToStorage( LocalStorageKeys.ACCESS_TOKEN, authResponse.accessToken );
          return loginRequestSuccess( { authResponse } );
        } ),
        catchError( (error: HttpErrorResponse) => {
          console.log( error );
          return of( loginRequestFailure( { backendErrors: error.error.message } ) );
        } )
      ) )
    )
  );

  public registerRequest$ = createEffect( () => this.actions$.pipe(
    ofType( registerRequest ),
    switchMap( ({ registerDto }) => this.authService.registration( registerDto ) ),
    map( (authResponse) => {
      this.localStorageService.addItemToStorage( LocalStorageKeys.ACCESS_TOKEN, authResponse.accessToken );
      return registerRequestSuccess( { authResponse } )
    } ),
    catchError( (error: HttpErrorResponse) =>
      of( registerRequestFailure( { backendErrors: error.error.message } ) )
    )
  ) );

  public getMe = createEffect( () => this.actions$.pipe(
    ofType( getMe ),
    concatMap( () => this.authService.getMe().pipe(
      map( (user) => getMeSuccess( { user } ) ),
      catchError( (error: HttpErrorResponse) => {
        if(error.status === 401) {
          this.store.dispatch( refreshTokenRequest() );
        }
        return of( getMeFailure() );
      } )
    ) ),
  ) );

  public refreshToken$ = createEffect( () => this.actions$.pipe(
    ofType( refreshTokenRequest ),
    concatMap( () => this.authService.refreshToken() ),
    map( (authResponse) => {
      this.localStorageService.addItemToStorage( LocalStorageKeys.ACCESS_TOKEN, authResponse.accessToken );
      this.store.dispatch( getMe() );
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
        this.router.navigate( [AppRoutes.AUTH] );
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
        getMe
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
        getMeSuccess,
        getMeFailure
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.AUTH } ) )
    )
  );
}