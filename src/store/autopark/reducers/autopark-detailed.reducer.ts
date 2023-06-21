import { createReducer, on } from '@ngrx/store';

import { AutoparkDetailed } from '@models';
import { AutoparkDetailedState } from '../states/autopark-detailed.state';
import { loadAutoparkDetailedSuccess } from '../actions/autopark-detailed.actions';

const initialState: AutoparkDetailedState = {
  autoparkDetailed: {} as AutoparkDetailed,
  cars: [],
  reviews: []
}

export const autoparkDetailedReducer = createReducer(
  initialState,
  on(loadAutoparkDetailedSuccess, (state, action) => ({
    ...state,
    autoparkDetailed: action.autoparkDetailedResponse.autoparkDetailed,
    cars: action.autoparkDetailedResponse.cars,
    reviews: action.autoparkDetailedResponse.reviews
  })),
)