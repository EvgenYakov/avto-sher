import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RegionState } from './region.state';

const regionFeatureSelector = createFeatureSelector<RegionState>('region');

export const selectCurrentRegion = createSelector(
  regionFeatureSelector,
  (state: RegionState) => state.currentRegion
)

export const selectListOfRegion = createSelector(
  regionFeatureSelector,
  (state: RegionState) => state.regions
)