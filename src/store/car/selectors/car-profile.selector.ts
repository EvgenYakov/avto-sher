import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarProfileState } from '../state/car-profile.state';

const carProfileFeatureSelector = createFeatureSelector<CarProfileState>('carProfile');

export const selectIsLoading = createSelector(
  carProfileFeatureSelector,
  (state) => state.isLoading
);

export const selectCarProfile = createSelector(
  carProfileFeatureSelector,
  (state) => state.profileCar
);

export const selectPhotos = createSelector(
  carProfileFeatureSelector,
  (state) => state.photos
);

export const selectFeatures = createSelector(
  carProfileFeatureSelector,
  (state) => state.features
);

export const selectError = createSelector(
  carProfileFeatureSelector,
  (state) => state.error
);