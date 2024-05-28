import { Route } from '@angular/router';

import { ControlPanel } from '@constants';

import { ControlPanelComponent } from './control-panel.component';
import { CarListComponent, CreateCarComponent } from '../cars';

export default [
  {
    path: '',
    component: ControlPanelComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ControlPanel.AUTOPARK_CONTROL,
      },
      {
        path: ControlPanel.AUTOPARK_CONTROL,
        loadChildren: () => import('../autopark/autopark.routes'),
      },
      {
        path: ControlPanel.PERSONAL_CONTROL,
        loadChildren: () => import('../personal/personal.routes'),
      },
      {
        path: ControlPanel.CAR_CONTROL,
        children: [
          {
            path: ControlPanel.CARS_TABLE,
            title: 'Машины',
            component: CarListComponent,
          },
          {
            path: ControlPanel.CREATE_CAR,
            title: 'Добавление авто',
            component: CreateCarComponent,
          },
          {
            path: ControlPanel.CAR_EDITOR + '/:id',
            title: 'Изменение авто',
            component: CreateCarComponent,
          },
        ],
      },
    ],
  },
] as Route[];
