import { Route } from '@angular/router';

import { ControlPanel } from '@constants';

import { AutoparkComponent } from './autopark.component';
import {
  AutoparkListComponent,
  AutoparkVerificationComponent,
  AutoparkWrapComponent,
  CreateAutoparkComponent,
} from './pages';

export default [
  {
    path: '',
    component: AutoparkComponent,
    children: [
      {
        path: ControlPanel.AUTOPARK_TABLE,
        title: 'Измение авто',
        component: AutoparkListComponent,
      },
      {
        path: ControlPanel.AUTOPARK,
        title: 'Создание автопарка',
        component: AutoparkWrapComponent,
        children: [
          {
            path: ControlPanel.CREATE_AUTOPARK,
            title: 'Создание автопарка',
            component: CreateAutoparkComponent,
          },
          {
            path: ControlPanel.VERIFICATION,
            title: 'Верификация автопарка',
            component: AutoparkVerificationComponent,
          },
        ],
      },
    ],
  },
] as Route[];
