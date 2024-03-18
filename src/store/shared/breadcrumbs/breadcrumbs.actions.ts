import { createAction, props } from '@ngrx/store';
import { MenuItem } from 'primeng/api';

export enum BreadcrumbAction {
  ADD_BREADCRUMB = '[Breadcrumb] Add Breadcrumb',
  NAVIGATE_TO_BREADCRUMB = '[Breadcrumb] Navigate To Breadcrumb',
}

export const addBreadcrumb = createAction(BreadcrumbAction.ADD_BREADCRUMB, props<{ breadcrumb: MenuItem }>());

export const navigateToBreadcrumb = createAction(
  BreadcrumbAction.NAVIGATE_TO_BREADCRUMB,
  props<{ breadcrumb: MenuItem }>()
);
