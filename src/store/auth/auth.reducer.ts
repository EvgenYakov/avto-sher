import { createReducer, on } from '@ngrx/store';

import {
  accessTokenStatusFailure,
  accessTokenStatusSuccess,
  loginRequestFailure,
  loginRequestSuccess,
  refreshTokenRequestFailure,
  refreshTokenRequestSuccess,
  registerRequestFailure,
  registerRequestSuccess
} from './auth.actions';

import { AuthState } from './auth.state';

const initialState: AuthState = {
  authResponse: null,
  isLoggedIn: false,
  backendErrors: '',
};

export const authReducer = createReducer(
  initialState,
  on( accessTokenStatusSuccess, refreshTokenRequestSuccess, (state) => (
    {
      ...state,
      isLoggedIn: true
    }
  ) ),
  on( loginRequestSuccess, registerRequestSuccess, (state, action) => (
    {
      ...state,
      authResponse: action.authResponse,
      isLoggedIn: true
    }
  ) ),
  on( refreshTokenRequestFailure, accessTokenStatusFailure, (state) => (
    {
      ...state,
      isLoggedIn: false
    }
  ) ),
  on( loginRequestFailure, registerRequestFailure, (state, action) => (
    {
      ...state,
      isLoggedIn: false,
      backendErrors: action.backendErrors
    }
  ) ),
);

