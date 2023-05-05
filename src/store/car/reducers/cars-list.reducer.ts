import {
  CarsListState,
  createCarFailure,
  createCarSuccess,
  deleteCarFailure,
  deleteCarSuccess,
  filterCarFailure,
  filterCarSuccess,
  loadAllCarsSuccess,
} from '@store';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { AutoCard, FilterParams } from '@models';

export const autoCardAdapter: EntityAdapter<AutoCard> = createEntityAdapter<AutoCard>({});

export const initialState: CarsListState = autoCardAdapter.getInitialState({
  filters: {} as FilterParams,
  error: null
});

export const carsListReducer = createReducer(
  initialState,
  on(createCarFailure,
    deleteCarFailure,
    filterCarFailure, (state, action) => ({
      ...state,
      error: action.errors
    })),
  on(loadAllCarsSuccess, (state, action) => (
    autoCardAdapter.addMany(action.cars, { ...state })
  )),
  on(createCarSuccess, (state, action) => (
    autoCardAdapter.addOne(action.car, { ...state })
  )),
  on(deleteCarSuccess, (state, action) => (
    autoCardAdapter.removeOne(action.carId, { ...state })
  )),
  on(filterCarSuccess, (state, action) => (
    autoCardAdapter.upsertMany(action.filteredCars, { ...state })
  )),
)