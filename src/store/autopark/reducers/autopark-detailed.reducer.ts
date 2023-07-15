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
  pagesLeft: 1,
  errors: ''
}

export const autoparkDetailedReducer = createReducer(
  initialState,
  on( loadAutoparkDetailedSuccess, (state, { autoparkDetailed }) => ({
    ...state,
    autoparkDetailed
  }) ),
  on( loadAutoparkCarsSuccess, (state, { cars,pagesLeft }) => ({
    ...state,
    cars,
    pagesLeft
  }) ),
  on( loadMoreAutoparkCars, (state, {}) => ({
    ...state,
    autoparkCarsPage: state.autoparkCarsPage + 1
  }) ),
)