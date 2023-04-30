import { CarsListState } from '../state/cars-list.state';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { CarCard } from '../interfaces/car.interface';
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
} from '../actions/cars-list.actions';

export const adapter: EntityAdapter<CarCard> = createEntityAdapter<CarCard>({});

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
    adapter.removeOne(action.id, { ...state, isLoading: false })
  )),
)