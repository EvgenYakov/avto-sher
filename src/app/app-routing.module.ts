import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '@constants';

const routes: Routes = [
  {path: '', redirectTo: AppRoutes.MAIN, pathMatch: 'full'},
  {
    path: AppRoutes.MAIN,
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: AppRoutes.AUTH,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    data: {
      userType: 'not-logged-in',
    },
  },
  {path: '**', redirectTo: '/not-found'},
  {
    path: 'not-found',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
