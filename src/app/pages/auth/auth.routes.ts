import { Route } from '@angular/router';

import { AuthRoutes } from './enums';
import AuthComponent from './components/auth';
import LoginComponent from './components/login';
import RegistrationComponent from './components/registration';

export default [
  {
    path: AuthRoutes.LOGIN,
    component: AuthComponent,
    children: [
      {
        path: AuthRoutes.LOGIN,
        component: LoginComponent
      },
      {
        path: AuthRoutes.REGISTRATION,
        component: RegistrationComponent
      },
    ]
  }
] as Route[];