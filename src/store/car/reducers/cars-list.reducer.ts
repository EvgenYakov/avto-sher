import { CarsListState } from '@store';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import {
  createCar,
  createCarFailure,
  createCarSuccess,
  deleteCar,
  deleteCarFailure,
  deleteCarSuccess,
  loadCars,
  loadCarsFailure,
  loadCarsSuccess
} from '@store';
import { AutoCard } from '@models';

export const adapter: EntityAdapter<AutoCard> = createEntityAdapter<AutoCard>({});

export const initialState: CarsListState = adapter.getInitialState({
  isLoading: false,
  error: null
});

export const carsListReducer = createReducer(
  initialState,
  on(loadCars,
    createCar,
    deleteCar, (state) => ({
      ...state,
      isLoading: true
    })),
  on(loadCarsFailure,
    createCarFailure,
    deleteCarFailure, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.errors
    })),
  on(loadCarsSuccess, (state, action) => (
    adapter.addMany(action.cars, { ...state, isLoading: false })
  )),
  on(createCarSuccess, (state, action) => (
    adapter.addOne(action.car, { ...state, isLoading: false })
  )),
  on(deleteCarSuccess, (state, action) => (
    adapter.removeOne(action.carId, { ...state, isLoading: false })
  )),
)