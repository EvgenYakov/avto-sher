import { createReducer, on } from '@ngrx/store';

import { getMeSuccess } from '../user';

import {
  loginRequestFailure,
  loginRequestSuccess,
  refreshTokenRequestFailure,
  refreshTokenRequestSuccess,
  registerRequestFailure,
  registerRequestSuccess,
} from './auth.actions';
import { AuthState } from './auth.state';

const initialState: AuthState = {
  isLoggedIn: false,
  backendErrors: '',
};

export const authReducer = createReducer(
  initialState,
  on(getMeSuccess, refreshTokenRequestSuccess, loginRequestSuccess, registerRequestSuccess, state => ({
    ...state,
    isLoggedIn: true,
  })),
  on(refreshTokenRequestFailure, state => ({
    ...state,
    isLoggedIn: false,
  })),
  on(loginRequestFailure, registerRequestFailure, (state, action) => ({
    ...state,
    isLoggedIn: false,
    backendErrors: action.backendErrors,
  }))
);
