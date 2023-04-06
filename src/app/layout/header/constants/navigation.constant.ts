import { Navigation } from '../interfaces/navigation.interface';
import { AppRoutes } from '@constants';

export const SECOND_LEVEL: Navigation[] = [
  {
    name: 'Автопарки',
    link: AppRoutes.AUTOPARK
  },
  {
    name: 'Автомобили',
    link: AppRoutes.AUTO
  },
  {
    name: 'Правила',
    link: AppRoutes.RULES
  },
  {
    name: 'Оплата',
    link: AppRoutes.PAYMENT
  },
  {
    name: 'Партнеры',
    link: AppRoutes.PARTNERS
  },
  {
    name: 'Обратная связь',
    link: AppRoutes.FEEDBACK
  },
];

export const THIRD_LEVEL:Navigation[] = [

]