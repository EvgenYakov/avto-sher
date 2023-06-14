import { createReducer, on } from '@ngrx/store';

import { AppRoutes } from '@constants';

import { addBreadcrumb, navigateToBreadcrumb } from './breadcrumbs.actions';
import { BreadcrumbsState } from './breadcrumbs.state';

export const breadcrumbsInitialState: BreadcrumbsState = {
  breadcrumbs: [{ label: 'Главная', routerLink: AppRoutes.MAIN }],
}

export const breadcrumbsReducer = createReducer(
  breadcrumbsInitialState,
  on( addBreadcrumb, (state, action) => (
    {
      ...state,
      breadcrumbs: [...state.breadcrumbs, action.breadcrumb],
    })
  ),
  on( navigateToBreadcrumb, (state, action) => {
    const breadcrumbIndex = state.breadcrumbs.findIndex( b => b.label === action.breadcrumb.label );
    return {
      ...state,
      breadcrumbs: state.breadcrumbs.slice( 0, breadcrumbIndex + 1 )
    }
  } ),
);
