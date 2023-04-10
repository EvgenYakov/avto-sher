import { HeaderNavigation } from '../interfaces/header-navigation.interface';
import { AppRoutes } from '@constants';
import { MenuItem } from 'primeng/api';

export const SECOND_LEVEL: HeaderNavigation[] = [
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

export const THIRD_LEVEL: MenuItem[] = [
  {
    label: 'Для таксопарков',
    routerLink: AppRoutes.FOR_TAXI_COMPANIES
  },
  {
    label: 'Для реферальных партнеров',
    routerLink: AppRoutes.FOR_REFERRAL_PARTNERS
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