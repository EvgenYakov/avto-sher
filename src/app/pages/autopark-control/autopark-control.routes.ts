import { Route } from '@angular/router';

import { ControlPanel } from '@constants';

import { CarListComponent, CreateAutoparkComponent, CreateCarComponent } from './components';
import { AutoparkControlComponent } from './autopark-control.component';

export default [
  {
    path: '',
    component: AutoparkControlComponent,
    children: [
      {
        path: ControlPanel.CARS_TABLE,
        title: 'Машины',
        component: CarListComponent
      },
      {
        path: ControlPanel.CREATE_CAR,
        title: 'Добавление авто',
        component: CreateCarComponent
      },
      {
        path: ControlPanel.CREATE_AUTOPARK,
        title: 'Создание автопарка',
        component: CreateAutoparkComponent
      },
    ]
  }
] as Route[];