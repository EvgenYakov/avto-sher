import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.state';

const authFeatureSelector = createFeatureSelector<AuthState>( 'auth' );

export const selectAuthErrors = createSelector(
  authFeatureSelector,
  (state) => state.backendErrors
);

export const selectIsLoggedIn = createSelector(
  authFeatureSelector,
  (state) => state.isLoggedIn
);

export const selectAuthResponse = createSelector(
  authFeatureSelector,
  (state) => state.authResponse
);


