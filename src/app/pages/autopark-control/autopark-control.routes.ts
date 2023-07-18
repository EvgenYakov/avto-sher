import { Route } from '@angular/router';

import { ControlPanel } from '@constants';

import { CarListComponent, CreateAutoparkComponent, CreateCarComponent } from './components';
import { AutoparkControlComponent } from './autopark-control.component';
import { AutoparkVerificationComponent } from './components/autopark-verification/autopark-verification.component';
import { AutoparkWrapComponent } from './components/autopark-wrap/autopark-wrap.component';

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
        path: ControlPanel.AUTOPARK,
        title: 'Создание автопарка',
        component: AutoparkWrapComponent,
        children: [
          {
            path: ControlPanel.CREATE_AUTOPARK,
            title: 'Создание автопарка',
            component: CreateAutoparkComponent
          },
          {
            path: ControlPanel.VERIFICATION,
            title: 'Верификация автопарка',
            component: AutoparkVerificationComponent
          },
        ]
      }

    ]
  }
] as Route[];