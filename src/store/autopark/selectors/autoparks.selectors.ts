import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AutoparksState } from '../states';

const autoparksFeatureSelector = createFeatureSelector<AutoparksState>( 'autoparks' );

export const selectRegions = createSelector(
  autoparksFeatureSelector,
  (state) => state.regions
);

export const getSelectedRegion = createSelector(
  autoparksFeatureSelector,
  (state) => state.selectedRegion
);

export const selectAuctionAutoparks = createSelector(
  autoparksFeatureSelector,
  (state) => state.auctionAutoparksCard
);