import { LoadingState } from './loading.state';
import { createReducer, on } from '@ngrx/store';
import { addLoading, removeLoading } from './loading.actions';

const initialState: LoadingState = {
  types: []
}

export const loadingReducer = createReducer(
  initialState,
  on(addLoading, (state, action) => ({
    ...state,
    types: [...state.types, action.addLoading]
  })),
  on(removeLoading, (state, action) => ({
    ...state,
    types: state.types.filter(a => a !== action.removeLoading)
  })),
);