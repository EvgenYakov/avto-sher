import { Route } from '@angular/router';

import { MainRoutes } from '@constants';

import { UserProfileComponent } from './components/user-profile';
import { ContentWrapperComponent } from './pages/content-wrapper';
import { FilterType } from './pages/content-wrapper/constant/filter-type.enum';
import { CardsType } from './pages/content-wrapper/constant/cards-type.enum';

export default [
  {
    path: '',
    component: UserProfileComponent
  },
  {
    path: MainRoutes.ORDER_HISTORY,
    component: ContentWrapperComponent,
    data: {title: 'История заказов', filterType: FilterType.HISTORY, cardsType: CardsType.ORDER_HISTORY}
  },
  {
    path: MainRoutes.MY_REQUESTS,
    component: ContentWrapperComponent,
    data: {title: 'Мои заявки', filterType: FilterType.REQUESTS, cardsType: CardsType.MY_REQUESTS}
  }
] as Route[]