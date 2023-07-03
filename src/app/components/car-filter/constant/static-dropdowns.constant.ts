import { Dropdown } from '@models';
import { MIN_RENTAL_PERIOD_OPTIONS, TARIFF_OPTIONS, WORK_SCHEDULE_OPTIONS } from '@constants';

export const STATIC_DROPDOWNS: Dropdown[] = [
  {
    label: 'Тариф',
    formControlName: 'tariff',
    placeholder: 'Выберите тариф',
    options: TARIFF_OPTIONS
  },
  {
    label: 'Срок аренды',
    formControlName: 'rentalPeriod',
    placeholder: 'Выберите срок аренды',
    options: MIN_RENTAL_PERIOD_OPTIONS
  },
  {
    label: 'График работы',
    formControlName: 'workSchedule',
    placeholder: 'График работы',
    options: WORK_SCHEDULE_OPTIONS
  },
];