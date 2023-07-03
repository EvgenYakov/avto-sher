import { Dropdown } from '@models';
import { FUEL_OPTIONS, TRANSMISSION_OPTIONS } from './characteristics.constants';

export const STATIC_DROPDOWNS: Dropdown[] = [
  {
    formControlName: 'fuel',
    placeholder: 'Топливо',
    options: FUEL_OPTIONS
  },
  {
    formControlName: 'transmission',
    placeholder: 'Коробка',
    options: TRANSMISSION_OPTIONS,
  },
];