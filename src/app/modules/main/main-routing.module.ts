import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { AppRoutes } from '@constants';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../start-page/start-page.module').then(
            (m) => m.StartPageModule
          ),
      },
      {
        path: AppRoutes.AUTOPARKS,
        loadChildren: () =>
          import('../autoparks/autoparks.module').then(
            (m) => m.AutoparksModule
          ),
      },
      {
        path: AppRoutes.CARS,
        loadChildren: () =>
          import('../cars/cars.module').then(
            (m) => m.CarsModule
          ),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('../user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: AppRoutes.AUTOPARK_DETAILED+'/:id',
        loadChildren: () =>
          import('../autopark-detailed/autopark-detailed.module').then(
            (m) => m.AutoparkDetailedModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
