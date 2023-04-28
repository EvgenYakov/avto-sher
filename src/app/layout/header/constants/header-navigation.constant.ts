import { AppRoutes } from '@constants';
import { MenuItem } from 'primeng/api';

export const HEADER_SECOND_LEVEL: MenuItem[] = [
  {
    label: 'Автопарки',
    routerLink: AppRoutes.AUTOPARK
  },
  {
    label: 'Автомобили',
    routerLink: AppRoutes.AUTO
  },
  {
    label: 'Правила',
    routerLink: AppRoutes.RULES
  },
  {
    label: 'Оплата',
    routerLink: AppRoutes.PAYMENT
  },
  {
    label: 'Партнеры',
    routerLink: AppRoutes.PARTNERS
  },
  {
    label: 'Обратная связь',
    routerLink: AppRoutes.FEEDBACK
  },
];

export const HEADER_THIRD_LEVEL: MenuItem[] = [
  {
    label: 'Для таксопарков',
    routerLink: AppRoutes.FOR_TAXI_COMPANIES
  },
  {
    label: 'Для партнеров',
    routerLink: AppRoutes.FOR_PARTNERS
  },
  {
    label: 'О нас',
    routerLink: AppRoutes.ABOUT_US
  },
]