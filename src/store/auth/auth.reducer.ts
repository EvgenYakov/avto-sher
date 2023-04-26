import {
  loginRequest,
  loginRequestFailure,
  loginRequestSuccess,
  registerRequest,
  registerRequestFailure,
  registerRequestSuccess
} from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { AuthState } from './auth.state';

const initialState: AuthState = {
  authResponse: null,
  isAuth: false,
  isLoading: false,
  backendErrors: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginRequest, registerRequest, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loginRequestSuccess, registerRequestSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    authResponse: action.authResponse,
    isAuth: true
  })),
  on(loginRequestFailure, registerRequestFailure, (state, action) => ({
    ...state,
    isLoading: false,
    backendError: action.backendError
  })),
);

