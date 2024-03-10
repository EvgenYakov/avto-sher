import { AutoparkDetailed } from '@models';
import { createReducer, on } from '@ngrx/store';

import { loadAutoparkCarsSuccess, loadAutoparkDetailedSuccess, loadMoreAutoparkCars, setAutopark } from '../actions';
import { AutoparkDetailedState } from '../states';

const initialState: AutoparkDetailedState = {
  autoparkDetailed: {} as AutoparkDetailed,
  cars: [],
  reviews: [],
  autoparkCard: null,
  autoparkCarsPage: 1,
  autoparkCarsLimit: 5,
  pagesLeft: 1,
  errors: '',
};

export const autoparkDetailedReducer = createReducer(
  initialState,
  on(loadAutoparkDetailedSuccess, (state, { autoparkDetailed }) => ({
    ...state,
    autoparkDetailed,
  })),
  on(loadAutoparkCarsSuccess, (state, { cars, pagesLeft }) => ({
    ...state,
    cars,
    pagesLeft,
  })),
  on(loadMoreAutoparkCars, (state, {}) => ({
    ...state,
    autoparkCarsPage: state.autoparkCarsPage + 1,
  })),
  on(setAutopark, (state, { autopark }) => ({
    ...state,
    autoparkCard: autopark,
  }))
);
