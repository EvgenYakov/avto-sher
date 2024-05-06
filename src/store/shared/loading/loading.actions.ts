import { LoadingTypes } from '@constants';
import { createAction, props } from '@ngrx/store';

export enum LoadingActions {
  ADD_LOADING = '[UI] Add loading',
  REMOVE_LOADING = '[UI] Remove loading',
  START_REQUEST = '[UI] Add loading',
  END_REQUEST = '[UI] Remove loading',
}

export const addLoading = createAction(LoadingActions.ADD_LOADING, props<{ addLoading: LoadingTypes }>());

export const removeLoading = createAction(LoadingActions.REMOVE_LOADING, props<{ removeLoading: LoadingTypes }>());

export const startRequest = createAction(LoadingActions.START_REQUEST);

export const endRequest = createAction(LoadingActions.END_REQUEST);
