import { ActionReducerMap } from '@ngrx/store';

import { authReducer, AuthState } from './auth';
import { CarsListState } from './car';
import { CarProfileState } from './car';
import { carProfileReducer } from './car/reducers/car-profile.reducer';
import { carsListReducer } from './car/reducers/cars-list.reducer';

export interface AppState {
  authState: AuthState,
  carListState: CarsListState,
  carProfile: CarProfileState
}

export const appReducers: ActionReducerMap<AppState> = {
  authState: authReducer,
  carListState: carsListReducer,
  carProfile: carProfileReducer
};