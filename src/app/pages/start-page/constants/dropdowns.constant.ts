import { Dropdown } from '@models';
import { FUEL_OPTIONS, TRANSMISSION_OPTIONS } from '@constants';

export let STATIC_DROPDOWNS: Dropdown[];
STATIC_DROPDOWNS = [
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