import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoDetailedComponent } from './auto-detailed.component';

const routes: Routes = [
  {
    path: '',
    component: AutoDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoDetailedRoutingModule {}
