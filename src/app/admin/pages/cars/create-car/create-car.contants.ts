import { FUEL_OPTIONS, MIN_RENTAL_PERIOD_OPTIONS, TRANSMISSION_OPTIONS, WORK_SCHEDULE_OPTIONS } from '@constants';
import { Dropdown } from '@models';

export const STATIC_DROPDOWNS: Dropdown[] = [
  {
    label: 'График работы',
    formControlName: 'rentSchedule',
    placeholder: 'График работы',
    options: WORK_SCHEDULE_OPTIONS,
  },
  {
    label: 'КПП',
    formControlName: 'transmission',
    placeholder: 'Выберите из списка',
    options: TRANSMISSION_OPTIONS,
  },
  {
    label: 'Тип топлива',
    formControlName: 'fuelType',
    placeholder: 'Выберите из списка',
    options: FUEL_OPTIONS,
  },
  {
    label: 'Срок аренды',
    formControlName: 'minRentPeriod',
    placeholder: 'Выберите срок аренды',
    options: MIN_RENTAL_PERIOD_OPTIONS,
  },
];

