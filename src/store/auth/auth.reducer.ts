import {
  loginRequestFailure,
  loginRequestSuccess,
  registerRequestFailure,
  registerRequestSuccess
} from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { AuthState } from './auth.state';

const initialState: AuthState = {
  authResponse: null,
  isAuth: false,
  backendErrors: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginRequestSuccess, registerRequestSuccess, (state, action) => ({
    ...state,
    authResponse: action.authResponse,
    isAuth: true
  })),
  on(loginRequestFailure, registerRequestFailure, (state, action) => ({
    ...state,
    backendError: action.backendError
  })),
);

