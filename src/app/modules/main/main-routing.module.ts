import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { StartPageComponent } from './components/start-page/start-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: StartPageComponent,
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('../../modules/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        //for test
        path: 'auto-detailed',
        loadChildren: () =>
          import('../../modules/auto-detailed/auto-detailed.module').then(
            (m) => m.AutoDetailedModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
