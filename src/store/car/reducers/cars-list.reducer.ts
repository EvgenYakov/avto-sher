import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { CarCard, FilterParams } from '@models';

import { CarsListState } from '../state';
import { filterCarFailure } from '../actions';

export const autoCardAdapter: EntityAdapter<CarCard> = createEntityAdapter<CarCard>( {} );

export const initialState: CarsListState = autoCardAdapter.getInitialState( {
  filters: {} as FilterParams,
  allCarsPage: 1,
  allCarsLimit: 20,
  error: '',
} );

export const carsListReducer = createReducer(
  initialState,
  on(
    filterCarFailure, (state, action) => ({
        ...state,
        error: action.errors
      }
    ) ),
  // on( loadAllCarsSuccess, (state, action) => (
  //   autoCardAdapter.addMany( action.cars, { ...state } )
  // ) ),
  // on( loadAllCarsSuccess, (state, action) => (
  //   autoCardAdapter.addMany( action.cars, { ...state } )
  // ) ),
  // on( createCarSuccess, (state, action) => (
  //   autoCardAdapter.addOne( action.car, { ...state } )
  // ) ),
  // on( deleteCarSuccess, (state, action) => (
  //   autoCardAdapter.removeOne( action.carId, { ...state } )
  // ) ),
  // on( filterCarSuccess, (state, action) => (
  //   autoCardAdapter.upsertMany( action.filteredCars, { ...state } )
  // ) ),
)