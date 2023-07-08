import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AutoparksState } from '../states';

const autoparksFeatureSelector = createFeatureSelector<AutoparksState>( 'autoparks' );

export const selectAuctionAutoparks = createSelector(
  autoparksFeatureSelector,
  (state) => state.auctionAutoparksCard
);