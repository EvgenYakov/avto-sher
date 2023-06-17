import { ActionReducerMap } from '@ngrx/store';

import { authReducer, AuthState } from './auth';
import { CarDetailedState, CarsListState } from './car';
import { carDetailedReducer } from './car/reducers/car-detailed.reducer';
import { carsListReducer } from './car/reducers/cars-list.reducer';
import { AutoparkDetailedState } from './autopark/states/autopark-detailed.state';
import { autoparkDetailedReducer } from './autopark';
import { breadcrumbsReducer, BreadcrumbsState, loadingReducer, LoadingState } from './shared';
import { userReducer, UserState } from './user';

export interface AppState {
  auth: AuthState,
  cars: CarsListState,
  carDetailed: CarDetailedState,
  autoparkDetailed: AutoparkDetailedState,
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
  breadcrumbs: breadcrumbsReducer
};