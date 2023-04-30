import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarsListState } from '../state/cars-list.state';
import { adapter } from '../reducers/cars-list.reducer';

const getCarsState = createFeatureSelector<CarsListState>('cars');

export const {
  selectAll: getAllCars,
} = adapter.getSelectors(getCarsState);

export const selectCarsLoading = createSelector(
  getCarsState,
  (state: CarsListState) => state.isLoading
);

export const selectCarsError = createSelector(
  getCarsState,
  (state: CarsListState) => state.error
);
