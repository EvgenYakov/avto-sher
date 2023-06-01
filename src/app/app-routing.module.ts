import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {
    path: 'main',
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'auth',
    loadChildren:() => import('./layouts/auth')
  },
  // {path: '**', redirectTo: '/not-found'},
  // {
  //   path: 'not-found',
  //   loadChildren: () =>
  //     import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
