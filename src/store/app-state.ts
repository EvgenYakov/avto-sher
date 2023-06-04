import { ActionReducerMap } from '@ngrx/store';

import { authReducer, AuthState } from './auth';
import { CarDetailedState, CarsListState } from './car';
import { carDetailedReducer } from './car/reducers/car-detailed.reducer';
import { carsListReducer } from './car/reducers/cars-list.reducer';
import { autoparkDetailedReducer, AutoparkDetailedState, autoparksReducer, AutoparksState } from './autopark';
import { loadingReducer, LoadingState } from './shared';

export interface AppState {
  auth: AuthState,
  cars: CarsListState,
  carDetailed: CarDetailedState,
  autoparkDetailed: AutoparkDetailedState,
  autoparks: AutoparksState,
  loading: LoadingState,
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  cars: carsListReducer,
  carDetailed: carDetailedReducer,
  autoparkDetailed: autoparkDetailedReducer,
  loading: loadingReducer,
  autoparks: autoparksReducer
};