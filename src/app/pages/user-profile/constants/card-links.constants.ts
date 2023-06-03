import { CardLink } from '../interfaces/card-link.interface';
import { AppRoutes } from "@constants";

export const CARD_LINKS: CardLink[] = [
  {
    title: 'Мои заказы',
    counterProperty: 'ordersCounter',
    counterText: 'завершенных заказов',
    routerLink: AppRoutes.ORDERS,
    cssClass: 'orders',
  },
  {
    title: 'Мои заявки',
    counterProperty: 'requestsCounter',
    counterText: 'завершенных заказов',
    routerLink: '',
    cssClass: 'requests',
  },
  {
    title: 'Избранное: Автомобили',
    counterProperty: 'favoriteCarsCounter',
    counterText: 'автомобилей',
    routerLink: '',
    cssClass: 'favorite-cars',
  },
  {
    title: 'Мои отзывы',
    counterProperty: 'reviewsByUserCounter',
    counterText: 'отзывов',
    routerLink: AppRoutes.REVIEWS,
    cssClass: 'my-reviews',
  },
  {
    title: 'Отзывы обо мне',
    counterProperty: 'reviewsAboutUserCounter',
    counterText: 'отзывов',
    routerLink: '',
    cssClass: 'reviews-about-me',
  },
  {
    title: 'Избранное: Автопарки',
    counterProperty: 'favoriteAutoparksCounter',
    counterText: 'автопарков',
    routerLink: '',
    cssClass: 'favorite-autoparks',
  },
];
