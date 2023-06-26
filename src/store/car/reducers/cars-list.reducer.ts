import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { CarCard, FilterParams } from '@models';

import { CarsListState } from '../states';
import {
  filterCarFailure,
  filterCarSuccess,
  loadUsedCarsBrandsSuccess,
  loadModelsByBrandSuccess
} from '../actions';

export const autoCardAdapter: EntityAdapter<CarCard> = createEntityAdapter<CarCard>( {} );

export const initialState: CarsListState = autoCardAdapter.getInitialState( {
  filters: {} as FilterParams,
  usedBrands: [],
  usedModels: [],
  allCarsPage: 1,
  allCarsLimit: 20,
  error: '',
} );

export const carsListReducer = createReducer(
  initialState,
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
  on( filterCarFailure, (state, action) => ({
      ...state,
      error: action.errors
    }
  ) ),
)