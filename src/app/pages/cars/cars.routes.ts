import { Route } from '@angular/router';

import { AppRoutes, MainRoutes } from '@constants';
import { AuthGuard } from '@services';

import { MainComponent } from './main.component';

export default [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../start-page/start-page.routes')
      },
      {
        path: MainRoutes.USER_PROFILE,
        loadChildren: () => import('../user-profile/user-profile.routes'),
        canActivate: [AuthGuard]
      },
      {
        path: MainRoutes.AUTOPARK_DETAILED + '/:id',
        loadChildren: () => import('../autopark-detailed/autopark-detailed.routes')
      },
      {
        path: MainRoutes.AUTO_DETAILED + '/:id',
        loadChildren: () => import('../auto-detailed/auto-detailed.routes')
      },
      {
        path: AppRoutes.CARS,
        loadChildren: () => import('../autopark-detailed/autopark-detailed.routes')
      },
    ]
  }
] as Route[];