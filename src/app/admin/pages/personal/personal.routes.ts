import { Route } from '@angular/router';

import { ControlPanel } from '@constants';

import { PersonalEditorComponent, PersonalListComponent } from './pages';
import { PersonalComponent } from './personal.component';

export default [
  {
    path: '',
    component: PersonalComponent,
    children: [
      {
        path: ControlPanel.PERSONAL_TABLE,
        title: 'Список персонала',
        component: PersonalListComponent,
      },
      {
        path: ControlPanel.CREATE_PERSONAL,
        title: 'Создание персонала',
        component: PersonalEditorComponent,
      },
      {
        path: ControlPanel.PERSONAL_EDITOR + '/:id',
        title: 'Изменение персонала',
        component: PersonalEditorComponent,
      },
    ],
  },
] as Route[];
