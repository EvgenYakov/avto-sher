import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LoadingState } from './loading.state';
import { LoadingTypes } from '@constants';

const loadingFeatureSelector = createFeatureSelector<LoadingState>('loading');

export const selectLoadingTypes = createSelector(
  loadingFeatureSelector,
  (state: LoadingState) => state.types
)

export const selectLoading = createSelector(
  selectLoadingTypes,
  (types: LoadingTypes[], props: { type: LoadingTypes }) => types.includes(props.type)
)



