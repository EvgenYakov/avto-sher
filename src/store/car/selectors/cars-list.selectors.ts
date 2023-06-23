import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CarsListState } from '../state';
import { autoCardAdapter } from '../reducers';

const carsListFeatureSelector = createFeatureSelector<CarsListState>('cars');

export const {
  selectEntities: selectCarsEntities,
  selectAll: selectCars,
} = autoCardAdapter.getSelectors();

export const getCarsEntities = createSelector(
  carsListFeatureSelector,
  selectCars
)
