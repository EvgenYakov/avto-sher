import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { CarCard } from '@models';
import { CarFilterParams } from '@components';

import { CarsListState } from '../states';
import {
  loadCarsSuccess,
  loadModelsByBrandSuccess,
  loadMore,
  loadMoreSuccess,
  loadUsedCarsBrandsSuccess,
  setCarsFiltersParams
} from '../actions';

export const autoCardAdapter: EntityAdapter<CarCard> = createEntityAdapter<CarCard>( {} );

export const initialState: CarsListState = autoCardAdapter.getInitialState( {
  filters: {} as CarFilterParams,
  usedBrands: [],
  usedModels: [],
  page: 1,
  limit: 7,
  error: '',
} );

export const carsListReducer = createReducer(
  initialState,
  on( loadCarsSuccess, (state, { cars }) => ({
    ...state,
    ...autoCardAdapter.setAll( cars, state )
  }) ),
  on( setCarsFiltersParams, (state, { params }) => ({
      ...state,
      filters: params
    }
  ) ),
  on( loadUsedCarsBrandsSuccess, (state, { brands }) => ({
    ...state,
    usedBrands: brands
  }) ),
  on( loadModelsByBrandSuccess, (state, { models }) => ({
    ...state,
    usedModels: models
  }) ),
  on( loadMore, (state) => ({
      ...state,
      page: state.page + 1
    }
  ) ),
  on( loadMoreSuccess, (state, { cars }) => ({
      ...state,
      ...autoCardAdapter.setMany( cars, state )
    }
  ) ),
)