import { LoadingTypes } from '@constants';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LoadingState } from './loading.state';

const loadingFeatureSelector = createFeatureSelector<LoadingState>('loading');

export const selectLoadingTypes = createSelector(loadingFeatureSelector, (state: LoadingState) => state.types);

export const selectLoading = createSelector(
  selectLoadingTypes,
  (types: LoadingTypes[], props: { type: LoadingTypes }) => types.includes(props.type)
);

export const selectInRequest = createSelector(loadingFeatureSelector, state => Boolean(state.inRequestQueue));
