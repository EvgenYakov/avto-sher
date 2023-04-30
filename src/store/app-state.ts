import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './auth';
import { CarsListState } from './car/state/cars-list.state';
import { CarProfileState, carsListReducer } from './car';
import { carProfileReducer } from './car/reducers/car-profile.reducer';

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