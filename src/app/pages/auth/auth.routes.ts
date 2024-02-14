import { Route } from '@angular/router';

import AuthComponent from './components/auth';
import LoginComponent from './components/login';
import RegistrationComponent from './components/registration';
import { AuthRoutes } from './enums';

export default [
  {
    path: AuthRoutes.LOGIN,
    component: AuthComponent,
    children: [
      {
        path: AuthRoutes.LOGIN,
        component: LoginComponent,
      },
      {
        path: AuthRoutes.REGISTRATION,
        component: RegistrationComponent,
      },
    ],
  },
] as Route[];
