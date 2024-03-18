import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ToasterState } from './toaster.state';

const toasterFeatureSelector = createFeatureSelector<ToasterState>('toaster');

export const selectBeError = createSelector(toasterFeatureSelector, (state: ToasterState) => ({
  message: state.detail,
  severity: state.severity,
}));
