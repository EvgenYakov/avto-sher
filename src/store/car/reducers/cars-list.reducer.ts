import { CarFilterParams } from '@components';
import { CarCard } from '@models';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  loadCarsSuccess,
  loadModelsByBrandSuccess,
  loadMoreCars,
  loadMoreCarsSuccess,
  loadUsedCarsBrandsSuccess,
  setCarsFiltersParams,
} from '../actions';
import { CarsListState } from '../states';

export const carCardAdapter: EntityAdapter<CarCard> = createEntityAdapter<CarCard>({});

export const initialState: CarsListState = carCardAdapter.getInitialState({
  filters: {} as CarFilterParams,
  usedBrands: [],
  usedModels: [],
  page: 1,
  limit: 7,
  pagesLeft: 1,
  error: '',
});

export const carsListReducer = createReducer(
  initialState,
  on(loadCarsSuccess, (state, { cars, pagesLeft }) => ({
    ...state,
    ...carCardAdapter.setAll(cars, state),
    pagesLeft,
  })),
  on(setCarsFiltersParams, (state, { params }) => ({
    ...state,
    filters: params,
  })),
  on(loadUsedCarsBrandsSuccess, (state, { brands }) => ({
    ...state,
    usedBrands: brands,
  })),
  on(loadModelsByBrandSuccess, (state, { models }) => ({
    ...state,
    usedModels: models,
  })),
  on(loadMoreCars, state => ({
    ...state,
    page: state.page + 1,
  })),
  on(loadMoreCarsSuccess, (state, { cars, pagesLeft }) => ({
    ...state,
    ...carCardAdapter.setMany(cars, state),
    pagesLeft,
  }))
);
