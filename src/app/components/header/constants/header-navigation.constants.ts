import { AppRoutes, ControlPanel } from '@constants';
import { MenuItem } from 'primeng/api';

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

export const OWNER_PANEL_LINK = {
  label: 'Панель автопарка',
  routerLink: ['/', AppRoutes.CONTROL_PANEL, ControlPanel.AUTOPARK_CONTROL],
};
