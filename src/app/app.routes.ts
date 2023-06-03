import { Routes } from '@angular/router';

import { AppRoutes } from '@constants';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/' + AppRoutes.MAIN, pathMatch: 'full' },
  {
    path: AppRoutes.MAIN,
    loadChildren: () => import('./pages/main/main.routes')
  },
  {
    path: AppRoutes.AUTH,
    loadChildren: () => import('./pages/auth/auth.routes')
  },
  { path: '**', redirectTo: '/' + AppRoutes.NOT_FOUND_PAGE },
  {
    path: AppRoutes.NOT_FOUND_PAGE,
    loadChildren: () => import('./pages/not-found/not-found.routes')
  },
];
