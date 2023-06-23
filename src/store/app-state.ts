import { ActionReducerMap } from '@ngrx/store';

import { authReducer, AuthState } from './auth';
import { carDetailedReducer, CarDetailedState, carsListReducer, CarsListState } from './car';
import { autoparkDetailedReducer, AutoparkDetailedState, autoparksReducer, AutoparksState } from './autopark';
import { breadcrumbsReducer, BreadcrumbsState, loadingReducer, LoadingState } from './shared';
import { userReducer, UserState } from './user';

export interface AppState {
  auth: AuthState,
  cars: CarsListState,
  carDetailed: CarDetailedState,
  autoparkDetailed: AutoparkDetailedState,
  autoparks: AutoparksState,
  user: UserState,
  loading: LoadingState,
  breadcrumbs: BreadcrumbsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  cars: carsListReducer,
  carDetailed: carDetailedReducer,
  autoparkDetailed: autoparkDetailedReducer,
  user: userReducer,
  loading: loadingReducer,
  autoparks: autoparksReducer,
  breadcrumbs: breadcrumbsReducer
};