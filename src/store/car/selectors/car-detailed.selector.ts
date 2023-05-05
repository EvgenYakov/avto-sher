import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CarDetailedState } from '@store';

const carProfileFeatureSelector = createFeatureSelector<CarDetailedState>('carDetailed');

export const selectCarProfile = createSelector(
  carProfileFeatureSelector,
  (state) => state.autoProfile
);

export const selectPhotos = createSelector(
  carProfileFeatureSelector,
  (state) => state.pathsOfImages
);

export const selectFeatures = createSelector(
  carProfileFeatureSelector,
  (state) => state.additional
);