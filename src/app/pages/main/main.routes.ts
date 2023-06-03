import { Route } from '@angular/router';

import { MainComponent } from './main.component';
import { MainRoutes } from '@pages';

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
        loadChildren: () => import('../user-profile/user-profile.routes')
      },
      {
        path: MainRoutes.AUTOPARK_DETAILED + '/:id',
        loadChildren: () => import('../autopark-detailed/autopark-detailed.routes')
      },
      {
        path: MainRoutes.AUTO_DETAILED + '/:id',
        loadChildren: () => import('../auto-detailed/auto-detailed.routes')
      },
    ]
  }
] as Route[];