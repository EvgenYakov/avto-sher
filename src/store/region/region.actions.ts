import { createAction, props } from '@ngrx/store';
import { LoadingTypes } from '@constants';

export enum LoadingActions {
  ADD_LOADING = '[UI] Add loading',
  REMOVE_LOADING = '[UI] Remove loading',
}

export const addLoading = createAction(
  LoadingActions.ADD_LOADING,
  props<{ addLoading: LoadingTypes }>()
);

export const removeLoading = createAction(
  LoadingActions.REMOVE_LOADING,
  props<{ removeLoading: LoadingTypes }>()
);