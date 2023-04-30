import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarProfileState } from '../state/car-profile.state';

const carProfileFeatureSelector = createFeatureSelector<CarProfileState>('carProfile');

export const selectIsLoading = createSelector(
  carProfileFeatureSelector,
  (state) => state.isLoading
);

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

export const selectError = createSelector(
  carProfileFeatureSelector,
  (state) => state.error
);