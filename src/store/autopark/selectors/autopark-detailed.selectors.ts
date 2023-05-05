import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AutoparkDetailedState } from '../states/autopark-detailed.state';

const autoparkDetailedFeatureSelector = createFeatureSelector<AutoparkDetailedState>('autoparkDetailed');

export const selectAutoparkDetailed = createSelector(
  autoparkDetailedFeatureSelector,
  (state) => state.autoparkDetailed
);

export const selectAutoparkCars = createSelector(
  autoparkDetailedFeatureSelector,
  (state) => state.cars
);

export const selectAutoparkReviews = createSelector(
  autoparkDetailedFeatureSelector,
  (state) => state.reviews
);