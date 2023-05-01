import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoparkProfileComponent } from './autopark-profile.component';

const routes: Routes = [
  {
    path: '', component: AutoparkProfileComponent, children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoparkProfileRoutingModule {
}
