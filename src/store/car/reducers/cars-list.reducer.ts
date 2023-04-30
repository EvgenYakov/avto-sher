import {
  CarsListState,
  createCar,
  createCarFailure,
  createCarSuccess,
  deleteCar,
  deleteCarFailure,
  deleteCarSuccess,
  filterCar,
  filterCarFailure,
  filterCarSuccess,
  loadCars,
  loadCarsFailure,
  loadCarsSuccess
} from '@store';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { AutoCard, FilterParams } from '@models';

export const adapter: EntityAdapter<AutoCard> = createEntityAdapter<AutoCard>({});

export const initialState: CarsListState = adapter.getInitialState({
  isLoading: false,
  filters: {} as FilterParams,
  error: null
});

export const carsListReducer = createReducer(
  initialState,
  on(loadCars,
    createCar,
    deleteCar,
    filterCar, (state) => ({
      ...state,
      isLoading: true
    })),
  on(loadCarsFailure,
    createCarFailure,
    deleteCarFailure,
    filterCarFailure, (state, action) => ({
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
  on(filterCarSuccess, (state, action) => (
    adapter.upsertMany(action.filteredCars, { ...state, isLoading: false })
  )),
)