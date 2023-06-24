import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { CarCard, FilterParams } from '@models';

import { CarsListState } from '../states';
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
  // on( loadAllCarsSuccess, (states, action) => (
  //   autoCardAdapter.addMany( action.cars, { ...states } )
  // ) ),
  // on( loadAllCarsSuccess, (states, action) => (
  //   autoCardAdapter.addMany( action.cars, { ...states } )
  // ) ),
  // on( createCarSuccess, (states, action) => (
  //   autoCardAdapter.addOne( action.car, { ...states } )
  // ) ),
  // on( deleteCarSuccess, (states, action) => (
  //   autoCardAdapter.removeOne( action.carId, { ...states } )
  // ) ),
  // on( filterCarSuccess, (states, action) => (
  //   autoCardAdapter.upsertMany( action.filteredCars, { ...states } )
  // ) ),
)