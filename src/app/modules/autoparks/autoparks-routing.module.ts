import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoparksComponent } from './autoparks/autoparks.component';

const routes: Routes = [
  {
    path: '',
    component: AutoparksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoparksRoutingModule { }
