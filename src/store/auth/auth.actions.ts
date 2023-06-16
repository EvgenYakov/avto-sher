import { createAction, props } from '@ngrx/store';
import { AuthResponse, LoginDto, RegisterDto } from '@pages';

export enum AuthActions {
  LOGIN_REQUEST = '[AUTH] Send login request',
  LOGIN_SUCCESS = '[AUTH] Login request success',
  LOGIN_FAILURE = '[AUTH] Login request failure',

  REGISTER_REQUEST = '[AUTH] Send register request',
  REGISTER_SUCCESS = '[AUTH] Register request success',
  REGISTER_FAILURE = '[AUTH] Register request failure',

  REFRESH_TOKEN_REQUEST = '[AUTH] Send refresh token request for getting new tokens',
  REFRESH_TOKEN_REQUEST_SUCCESS = '[AUTH] Send refresh token request for getting new tokens success',
  REFRESH_TOKEN_REQUEST_FAILURE = '[AUTH] Send refresh token request for getting new tokens failure',

  UNAUTHORIZED = '[AUTH] Unauthorized',

  ACCESS_TOKEN_STATUS = '[AUTH] Get access token status',
  ACCESS_TOKEN_STATUS_SUCCESS = '[AUTH] Token is valid',
  ACCESS_TOKEN_STATUS_FAILURE = '[AUTH] Token is invalid',
}

export const loginRequest = createAction(
  AuthActions.LOGIN_REQUEST,
  props<{ loginDto: LoginDto }>()
);

export const loginRequestSuccess = createAction(
  AuthActions.LOGIN_SUCCESS,
  props<{ authResponse: AuthResponse }>()
);

export const loginRequestFailure = createAction(
  AuthActions.LOGIN_FAILURE,
  props<{ backendErrors: string }>()
);

export const registerRequest = createAction(
  AuthActions.REGISTER_REQUEST,
  props<{ registerDto: RegisterDto }>()
);

export const registerRequestSuccess = createAction(
  AuthActions.REGISTER_SUCCESS,
  props<{ authResponse: AuthResponse }>()
);

export const registerRequestFailure = createAction(
  AuthActions.REGISTER_FAILURE,
  props<{ backendErrors: string }>()
);

export const refreshTokenRequest = createAction(
  AuthActions.REFRESH_TOKEN_REQUEST
);

export const refreshTokenRequestSuccess = createAction(
  AuthActions.REFRESH_TOKEN_REQUEST_SUCCESS,
);

export const refreshTokenRequestFailure = createAction(
  AuthActions.REFRESH_TOKEN_REQUEST_FAILURE,
);

export const unauthorized = createAction(
  AuthActions.UNAUTHORIZED
);

export const accessTokenStatus = createAction(
  AuthActions.ACCESS_TOKEN_STATUS
);

export const accessTokenStatusSuccess = createAction(
  AuthActions.ACCESS_TOKEN_STATUS_SUCCESS
);

export const accessTokenStatusFailure = createAction(
  AuthActions.ACCESS_TOKEN_STATUS_FAILURE
);