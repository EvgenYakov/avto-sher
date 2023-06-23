import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CarDetailedState } from '@store';

const carProfileFeatureSelector = createFeatureSelector<CarDetailedState>('carDetailed');

export const selectCarProfile = createSelector(
  carProfileFeatureSelector,
  (state) => state.carProfile
);