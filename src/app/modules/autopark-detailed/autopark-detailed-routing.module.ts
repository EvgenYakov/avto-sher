import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoparkDetailedComponent } from './autopark-detailed.component';

const routes: Routes = [
  {
    path: '', component: AutoparkDetailedComponent, children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoparkDetailedRoutingModule {
}
