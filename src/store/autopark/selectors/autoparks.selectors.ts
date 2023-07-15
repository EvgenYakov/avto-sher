import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AutoparksState } from '../states';
import { autoparkCardAdapter } from '../reducers';

const autoparksFeatureSelector = createFeatureSelector<AutoparksState>( 'autoparks' );

export const selectAuctionAutoparks = createSelector(
  autoparksFeatureSelector,
  (state) => state.auctionAutoparksCard
);

export const {
  selectAll: selectAutoparks
} = autoparkCardAdapter.getSelectors();

export const getAutoparksEntities = createSelector(
  autoparksFeatureSelector,
  selectAutoparks
);

export const selectAutoparksPage = createSelector(
  autoparksFeatureSelector,
  (state) => state.page
);

export const selectAutoparksLimit = createSelector(
  autoparksFeatureSelector,
  (state) => state.limit
);