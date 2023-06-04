import { createReducer, on } from '@ngrx/store';

import { AutoparksState } from '../states';
import { loadAutoparkRegionsSuccess } from '../actions';

const initialState: AutoparksState = {
  regions: []
}

export const autoparksReducer = createReducer(
  initialState,
  on( loadAutoparkRegionsSuccess, (state, action) => ({
    ...state,
    regions: action.regions
  }) ),
)