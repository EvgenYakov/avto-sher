import { Route } from '@angular/router';

import { ControlPanel } from '@constants';

import { AutoparkControlComponent } from './autopark-control.component';
import { CreateCarComponent } from './components';
import { CarListComponent } from './components/car-list/car-list.component';

export default [
  {
    path: '',
    component: AutoparkControlComponent,
    children: [
      {
        path: ControlPanel.CARS_TABLE, component: CarListComponent
      },
      {
        path: ControlPanel.CREATE_CAR, component: CreateCarComponent
      },
    ]
  }
] as Route[];