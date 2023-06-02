import { Routes } from '@angular/router';
import { AppRoutes } from '@constants';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {
    path: 'main',
    loadComponent: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: AppRoutes.AUTH,
    loadChildren:() => import('./pages/auth/auth.routes')
  },
  {path: '**', redirectTo: '/not-found'},
  {
    path: 'not-found',
    loadComponent: () =>
      import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];
