import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes, ControlPanel, LoadingTypes, LocalStorageKeys, UserRole } from '@constants';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthService, LocalStorageService, UserService } from '@services';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';

import { addLoading, removeLoading } from '../shared';
import { getMe, getMeFailure, getMeSuccess } from '../user';

import {
  loginRequest,
  loginRequestFailure,
  loginRequestSuccess,
  logout,
  refreshTokenRequest,
  refreshTokenRequestFailure,
  refreshTokenRequestSuccess,
  registerRequest,
  registerRequestFailure,
  registerRequestSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private store: Store,
    private localStorageService: LocalStorageService
  ) {}

  public loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequest),
      switchMap(({ loginDto }) =>
        this.authService.login(loginDto).pipe(
          map(authResponse => {
            this.localStorageService.addItemToStorage(LocalStorageKeys.ACCESS_TOKEN, authResponse.accessToken);
            return loginRequestSuccess({ authResponse });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(loginRequestFailure({ backendErrors: error.error.message }));
          })
        )
      )
    )
  );

  public registerRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerRequest),
      switchMap(({ registerDto }) =>
        this.authService.registration(registerDto).pipe(
          map(authResponse => {
            this.localStorageService.addItemToStorage(LocalStorageKeys.ACCESS_TOKEN, authResponse.accessToken);
            return registerRequestSuccess({ authResponse });
          }),
          catchError((error: HttpErrorResponse) => of(registerRequestFailure({ backendErrors: error.error.message })))
        )
      )
    )
  );

  public getMe = createEffect(() =>
    this.actions$.pipe(
      ofType(getMe, loginRequestSuccess, registerRequestSuccess),
      concatMap(() =>
        this.userService.getMe().pipe(
          map(user => getMeSuccess({ user })),
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.store.dispatch(refreshTokenRequest());
            }
            return of(getMeFailure());
          })
        )
      )
    )
  );

  public refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(refreshTokenRequest),
      concatMap(() => this.authService.refreshToken()),
      map(authResponse => {
        this.localStorageService.addItemToStorage(LocalStorageKeys.ACCESS_TOKEN, authResponse.accessToken);
        this.store.dispatch(getMe());
        return refreshTokenRequestSuccess();
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.store.dispatch(logout());
        }
        return of(refreshTokenRequestFailure());
      })
    )
  );

  public logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        switchMap(() => this.authService.logout()),
        tap(() => {
          this.localStorageService.removeItemFromStorage(LocalStorageKeys.ACCESS_TOKEN);
          this.router.navigate([AppRoutes.AUTH]);
        })
      ),
    { dispatch: false }
  );

  public navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginRequestSuccess, registerRequestSuccess),
        tap(({ authResponse }) => {
          this.localStorageService.addItemToStorage(LocalStorageKeys.ROLE, authResponse.role);

          switch (authResponse.role) {
            case UserRole.OWNER:
              this.router.navigate([AppRoutes.CONTROL_PANEL]);
              break;
            case UserRole.DRIVER:
              this.router.navigate([AppRoutes.MAIN]);
              break;
            case UserRole.ADMIN:
              this.router.navigate([AppRoutes.CONTROL_PANEL]);
              break;
            case UserRole.OPERATOR:
              this.router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CARS_TABLE]);
              break;
          }
        })
      ),
    { dispatch: false }
  );

  public addLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequest, registerRequest),
      map(() => addLoading({ addLoading: LoadingTypes.AUTH }))
    )
  );

  public removeLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequestSuccess, loginRequestFailure, registerRequestSuccess, registerRequestFailure),
      map(() => removeLoading({ removeLoading: LoadingTypes.AUTH }))
    )
  );
}
