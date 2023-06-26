import { Route } from '@angular/router';

import { MainRoutes } from '@constants';

import { UserProfileComponent } from './components/user-profile';
import { OrderHistoryComponent } from '../order-history/order-history.component';

export default [
  {
    path: '',
    component: UserProfileComponent
  },
  {
    path: MainRoutes.ORDER_HISTORY,
    component: OrderHistoryComponent
  }
] as Route[]