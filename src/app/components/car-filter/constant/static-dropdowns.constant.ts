import { MIN_RENTAL_PERIOD_OPTIONS, TARIFF_OPTIONS, WORK_SCHEDULE_OPTIONS } from '@constants';
import { Dropdown } from '@models';

export const STATIC_DROPDOWNS: Dropdown[] = [
  {
    label: 'Тариф',
    formControlName: 'type',
    placeholder: 'Выберите тариф',
    options: TARIFF_OPTIONS,
  },
  {
    label: 'График работы',
    formControlName: 'rentSchedule',
    placeholder: 'График работы',
    options: WORK_SCHEDULE_OPTIONS,
  },
  {
    label: 'Срок аренды',
    formControlName: 'minRentPeriod',
    placeholder: 'Выберите срок аренды',
    options: MIN_RENTAL_PERIOD_OPTIONS,
  },
];
