import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CarsListState } from '../states';
import { carCardAdapter } from '../reducers';

const carsListFeatureSelector = createFeatureSelector<CarsListState>('cars');

export const {
  selectEntities: selectCarsEntities,
  selectAll: selectCars,
} = carCardAdapter.getSelectors();

export const getCarsEntities = createSelector(
  carsListFeatureSelector,
  selectCars
)

export const selectCarBrands = createSelector(
  carsListFeatureSelector,
  (state) => state.usedBrands
);

export const selectCarModels = createSelector(
  carsListFeatureSelector,
  (state) => state.usedModels
);

export const selectCarsPage = createSelector(
  carsListFeatureSelector,
  (state) => state.page
);

export const selectCarsLimit = createSelector(
  carsListFeatureSelector,
  (state) => state.limit
);

export const selectCarsFilterParams = createSelector(
  carsListFeatureSelector,
  (state) => state.filters
);