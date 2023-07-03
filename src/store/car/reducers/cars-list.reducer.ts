import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { CarCard, FilterParams } from '@models';

import { CarsListState } from '../states';
import {
  filterCar,
  filterCarFailure,
  filterCarSuccess,
  loadAllCarsSuccess,
  loadModelsByBrandSuccess,
  loadMore,
  loadUsedCarsBrandsSuccess
} from '../actions';

export const autoCardAdapter: EntityAdapter<CarCard> = createEntityAdapter<CarCard>( {} );

export const initialState: CarsListState = autoCardAdapter.getInitialState( {
  filters: {} as FilterParams,
  usedBrands: [],
  usedModels: [],
  page: 1,
  limit: 12,
  error: '',
} );

export const carsListReducer = createReducer(
  initialState,
  on( loadAllCarsSuccess, (state, { cars }) => ({
    ...state,
    ...autoCardAdapter.addMany( cars, state )
  }) ),
  on( filterCar, (state, { filterParams }) => ({
      ...state,
      filters: filterParams
    }
  ) ),
  on( filterCarSuccess, (state, { filteredCars }) => ({
    ...state,
    ...autoCardAdapter.setAll( filteredCars, state )
  }) ),
  on( loadUsedCarsBrandsSuccess, (state, { brands }) => ({
    ...state,
    usedBrands: brands
  }) ),
  on( loadModelsByBrandSuccess, (state, { models }) => ({
    ...state,
    usedModels: models
  }) ),
  on( filterCarFailure, (state, { errors }) => ({
      ...state,
      error: errors
    }
  ) ),
  on( loadMore, (state) => ({
      ...state,
      page: state.page + 1
    }
  ) ),
)