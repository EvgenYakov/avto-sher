import { createReducer, on } from '@ngrx/store';

import { AutoparkDetailed } from '@models';

import { AutoparkDetailedState } from '../states';
import { loadAutoparkCarsSuccess, loadAutoparkDetailedSuccess, loadMoreAutoparkCars } from '../actions';

const initialState: AutoparkDetailedState = {
  autoparkDetailed: {} as AutoparkDetailed,
  cars: [],
  reviews: [],
  autoparkCarsPage: 1,
  autoparkCarsLimit: 5,
  errors: ''
}

export const autoparkDetailedReducer = createReducer(
  initialState,
  on( loadAutoparkDetailedSuccess, (state, { autoparkDetailed }) => ({
    ...state,
    autoparkDetailed
  }) ),
  on( loadAutoparkCarsSuccess, (state, { cars }) => ({
    ...state,
    cars
  }) ),
  on( loadMoreAutoparkCars, (state, {}) => ({
    ...state,
    autoparkCarsPage: state.autoparkCarsPage + 1
  }) ),
)