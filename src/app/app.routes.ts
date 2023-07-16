import { Routes } from '@angular/router';

import { AppRoutes } from '@constants';

import { OfferAgreementComponent, PrivacyComponent } from './components/docx';

export const appRoutes: Routes = [
  {
    path: '', redirectTo: '/main', pathMatch: 'full'
  },
  {
    path: AppRoutes.MAIN,
    loadChildren: () => import('./pages/main/main.routes')
  },
  {
    path: AppRoutes.CONTROL_PANEL,
    loadChildren: () => import('./pages/control-panel/control-panel.routes')
  },
  {
    path: AppRoutes.AUTH,
    loadChildren: () => import('./pages/auth/auth.routes')
  },
  {
    path: AppRoutes.PRIVACY, component: PrivacyComponent
  },
  {
    path: AppRoutes.OFFER_AGREEMENT, component: OfferAgreementComponent
  },
  // { path: '**', redirectTo: '/' + AppRoutes.NOT_FOUND_PAGE },
  // {
  //   path: AppRoutes.NOT_FOUND_PAGE,
  //   loadChildren: () => import('./pages/not-found/not-found.routes')
  // },
];
