import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AutoparksState } from '../states';

const autoparksFeatureSelector = createFeatureSelector<AutoparksState>( 'autoparks' );

export const selectAutoparksRegions = createSelector(
  autoparksFeatureSelector,
  (state) => state.regions
);