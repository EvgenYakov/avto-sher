import { Route } from '@angular/router';

import { ControlPanel } from '@constants';

import { CreateCarComponent } from './components';
import { AutoparkControlComponent } from './autopark-control.component';
import { CarListComponent } from './components/car-list/car-list.component';

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
    ]
  }
] as Route[];