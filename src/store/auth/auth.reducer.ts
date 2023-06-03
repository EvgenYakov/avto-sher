import { createReducer, on } from '@ngrx/store';

import {
  accessTokenStatusSuccess,
  loginRequestFailure,
  loginRequestSuccess,
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
  on( loginRequestFailure, registerRequestFailure, (state, action) => (
    {
      ...state,
      backendError: action.backendError
    }
  ) ),
);

