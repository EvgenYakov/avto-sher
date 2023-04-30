import { MenuItem } from 'primeng/api';

import { AppRoutes } from '@constants';

export const DRIVER_COLUMN: MenuItem[] = [
  {
    label: 'Как сделать заказ?',
    routerLink: AppRoutes.ORDER_STEPS,
  },
  {
    label: 'Полное руководство',
    routerLink: AppRoutes.DRIVER_FULL_DOCUMENTATION,
  },
];

export const AUTOPARK_COLUMN: MenuItem[] = [
  {
    label: 'Как добавить свой автопарк',
    routerLink: AppRoutes.HOW_ADD_AUTOPARK,
  },
  {
    label: 'Полное руководство',
    routerLink: AppRoutes.AUTOPARK_FULL_DOCUMENTATION,
  },
  {
    label: 'Условия размещения',
    routerLink: AppRoutes.CONDITIONS,
  },
  {
    label: 'Добавить свой автопарк',
    routerLink: AppRoutes.ADD_AUTOPARK,
  },
];

export const INFO_COLUMN: MenuItem[] = [
  {
    label: 'Обратная связь',
    routerLink: AppRoutes.FEEDBACK,
  },
  {
    label: 'Правила',
    routerLink: AppRoutes.RULES,
  },
  {
    label: 'Команда сайта',
    routerLink: AppRoutes.TEAM,
  },
];
