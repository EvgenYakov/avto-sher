import { Route } from '@angular/router';
import { ControlPanelComponent } from './control-panel.component';

export default [
  {
    path: '',
    component: ControlPanelComponent,
    children: [

    ]
  }
] as Route[];