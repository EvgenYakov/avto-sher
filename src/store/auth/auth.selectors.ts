import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const selectAuthErrors = createSelector(
  authFeatureSelector,
  (state) => state.backendErrors
);

export const selectAuthLoading = createSelector(
  authFeatureSelector,
  (state) => state.isLoading
);

export const selectIsLoggedIn = createSelector(
  authFeatureSelector,
  (state) => state.isAuth
);

export const selectAuthResponse = createSelector(
  authFeatureSelector,
  (state) => state.authResponse
);


