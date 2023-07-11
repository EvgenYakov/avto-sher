import { Routes } from '@angular/router';

import { AppRoutes } from '@constants';

import { PrivacyComponent } from './pages/auth/components/privacy/privacy.component';
import { OfferAgreementComponent } from './pages/auth/components/offer-agreement/offer-agreement.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/' + AppRoutes.MAIN, pathMatch: 'full' },
  {
    path: AppRoutes.MAIN,
    loadChildren: () => import('./pages/main/main.routes')
  },
  {
    path: AppRoutes.AUTOPARK_PANEL,
    loadChildren: () => import('./pages/control-panel/control-panel.routes')
  },
  {
    path: AppRoutes.AUTH,
    loadChildren: () => import('./pages/auth/auth.routes')
  },
  {
    path: 'privacy', component: PrivacyComponent
  },
  {
    path: 'offer-agreement', component: OfferAgreementComponent
  },
  // { path: '**', redirectTo: '/' + AppRoutes.NOT_FOUND_PAGE },
  // {
  //   path: AppRoutes.NOT_FOUND_PAGE,
  //   loadChildren: () => import('./pages/not-found/not-found.routes')
  // },
];
