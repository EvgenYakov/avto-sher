import { Dropdown, DropdownOption } from '@models';

export const FARE_OPTIONS: DropdownOption[] = [
  { label: 'Эконом', value: 'economy' },
  { label: 'Комфорт', value: 'comfort' },
  { label: 'Комфорт +', value: 'comfort-plus' },
  { label: 'Бизнес', value: 'business' },
];

export const FUEL_OPTIONS: DropdownOption[] = [
  { label: 'Бензин', value: 'petrol' },
  { label: 'Дизель', value: 'diesel' },
];

export const GEARBOX_OPTIONS: DropdownOption[] = [
  { label: 'Механическая', value: 'manual' },
  { label: 'Автоматическая', value: 'automatic' },
];

export const ADDITIONAL_OPTIONS: DropdownOption[] = [
  { label: 'Без комиссии', value: 'without-commission' },
  { label: 'Фирменная оклейка', value: 'branded-stickers' },
  { label: 'Желтые номера', value: 'yellow-numbers' },
  { label: 'Без залога', value: 'without-bail' },
  { label: 'Детское кресло', value: 'child-seat' },
];

export const BRAND_OPTIONS: DropdownOption[] = [
  { label: 'BMW', value: 'bmw' },
  { label: 'AUDI', value: 'audi' },
  { label: 'LEXUS', value: 'lexus' },
];

export const MODEL_OPTIONS: DropdownOption[] = [
  { label: 'X6', value: 'x6' },
  { label: 'E30', value: 'e30' },
  { label: 'Q5', value: 'q5' },
  { label: 'A4', value: 'a4' },
  { label: 'ES', value: 'es' },
  { label: 'LX', value: 'lx' },
];

export const DROPDOWNS: Dropdown[] = [
  {
    formControlName: 'brand',
    placeholder: 'Выберите марку',
    options: BRAND_OPTIONS,
  },
  {
    formControlName: 'model',
    placeholder: 'Выберите модель',
    options: MODEL_OPTIONS,
  },
  { formControlName: 'fuel', placeholder: 'Топливо', options: FUEL_OPTIONS },
  {
    formControlName: 'gearbox',
    placeholder: 'Коробка',
    options: GEARBOX_OPTIONS,
  },
];
