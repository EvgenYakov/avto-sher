import { Route } from '@angular/router';

import { ControlPanel } from '@constants';
import { ControlPanelComponent } from './control-panel.component';

export default [
  {
    path: '',
    component: ControlPanelComponent,
    children: [
      {
        path: ControlPanel.AUTOPARK_CONTROL,
        loadChildren: () => import('../autopark-control/autopark-control.routes')
      },
    ]
  }
] as Route[];