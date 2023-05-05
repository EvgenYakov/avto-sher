import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CarsListState } from '@store';
import { autoCardAdapter } from '../reducers/cars-list.reducer';

const carsListFeatureSelector = createFeatureSelector<CarsListState>('carListState');

export const {
  selectEntities: selectCarsEntities,
  selectAll: selectCars,
} = autoCardAdapter.getSelectors();

export const getCarsEntities = createSelector(
  carsListFeatureSelector,
  selectCars
)

