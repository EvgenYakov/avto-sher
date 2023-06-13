import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuItem } from 'primeng/api';

import { BreadcrumbsState } from './breadcrumbs.state';

export const breadcrumbsFeatureSelector = createFeatureSelector<BreadcrumbsState>('breadcrumbs');

export const selectBreadcrumbs = createSelector(
  breadcrumbsFeatureSelector,
  (state: BreadcrumbsState) : MenuItem[] => state.breadcrumbs
);
