import { createReducer, on } from '@ngrx/store';

import { addLoading, endRequest, removeLoading, startRequest } from './loading.actions';
import { LoadingState } from './loading.state';

const initialState: LoadingState = {
  types: [],
  inRequestQueue: 0,
};

export const loadingReducer = createReducer(
  initialState,
  on(addLoading, (state, action) => ({
    ...state,
    types: [...state.types, action.addLoading],
  })),
  on(removeLoading, (state, action) => ({
    ...state,
    types: state.types.filter(a => a !== action.removeLoading),
  })),
  on(startRequest, state => ({ ...state, inRequestQueue: state.inRequestQueue + 1 })),
  on(endRequest, state => ({ ...state, inRequestQueue: state.inRequestQueue - 1 })),
);
