import { FUEL_OPTIONS, TRANSMISSION_OPTIONS } from '@constants';
import { Dropdown } from '@models';

export let STATIC_DROPDOWNS: Dropdown[];
STATIC_DROPDOWNS = [
  {
    formControlName: 'fuel',
    placeholder: 'Топливо',
    options: FUEL_OPTIONS,
  },
  {
    formControlName: 'transmission',
    placeholder: 'Коробка',
    options: TRANSMISSION_OPTIONS,
  },
];
