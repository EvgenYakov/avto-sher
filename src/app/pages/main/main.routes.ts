import { Route } from '@angular/router';

import { MainComponent } from './main.component';
import { MainRoutes } from './enums/main-routes.enum';

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
        path: MainRoutes.AUTOPARK_DETAILED,
        loadChildren: () => import('../autopark-detailed/autopark-detailed.routes')
      },
      {
        path: MainRoutes.AUTO_DETAILED,
        loadChildren: () => import('../auto-detailed/auto-detailed.routes')
      },
    ]
  }
] as Route[];