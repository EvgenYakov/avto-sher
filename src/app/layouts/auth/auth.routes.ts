import { Routes } from '@angular/router';
import { AuthRoutes } from './enums';

export const routes: Routes = [
  {
    path: AuthRoutes.AUTH,
    loadComponent:() => import('./components/auth'),
    children: [
      {
        path: AuthRoutes.LOGIN,
        loadComponent:() => import('./components/login')
      },
      {
        path: AuthRoutes.REGISTRATION,
        loadComponent:() => import('./components/registration')
      },
    ]
  },

]