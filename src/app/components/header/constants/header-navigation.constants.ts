import { MenuItem } from 'primeng/api';

import { AppRoutes } from '@constants';

export const MAIN_NAV: MenuItem[] = [
  {
    label: 'Автопарки',
    routerLink: AppRoutes.AUTOPARKS,
  },
  {
    label: 'Автомобили',
    routerLink: AppRoutes.CARS,
  },
  {
    label: 'Правила',
    routerLink: AppRoutes.RULES,
  },
  {
    label: 'Партнеры',
    routerLink: AppRoutes.PARTNERS,
  },
  {
    label: 'Обратная связь',
    routerLink: AppRoutes.FEEDBACK,
  },
];

export const SECONDARY_NAV: MenuItem[] = [
  {
    label: 'Для автопарков',
    routerLink: AppRoutes.FOR_AUTOPARKS,
  },
  {
    label: 'Для партнеров',
    routerLink: AppRoutes.FOR_PARTNERS,
  },
  {
    label: 'О нас',
    routerLink: AppRoutes.ABOUT_US,
  },
];
