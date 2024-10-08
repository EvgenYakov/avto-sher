import { MainRoutes } from '@constants';

import { CardLink } from '../interfaces';

export const CARD_LINKS: CardLink[] = [
  {
    title: 'Мои заказы',
    counterProperty: 'ordersCounter',
    counterText: 'завершенных заказов',
    routerLink: MainRoutes.ORDER_HISTORY,
    cssClass: 'orders',
    isDisabled: true,
  },
  {
    title: 'Мои заявки',
    counterProperty: 'requestsCounter',
    counterText: 'завершенных заказов',
    routerLink: MainRoutes.MY_REQUESTS,
    cssClass: 'requests',
    isDisabled: true,
  },
  {
    title: 'Избранное: Автомобили',
    counterProperty: 'favoriteCarsCounter',
    counterText: 'автомобилей',
    routerLink: '',
    cssClass: 'favorite-cars',
    isDisabled: true,
  },
  {
    title: 'Мои отзывы',
    counterProperty: 'reviewsByUserCounter',
    counterText: 'отзывов',
    routerLink: '',
    cssClass: 'my-reviews',
    isDisabled: true,
  },
  {
    title: 'Отзывы обо мне',
    counterProperty: 'reviewsAboutUserCounter',
    counterText: 'отзывов',
    routerLink: '',
    cssClass: 'reviews-about-me',
    isDisabled: true,
  },
  {
    title: 'Избранное: Автопарки',
    counterProperty: 'favoriteAutoparksCounter',
    counterText: 'автопарков',
    routerLink: '',
    cssClass: 'favorite-autoparks',
    isDisabled: true,
  },
];
