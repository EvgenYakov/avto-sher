import { DropdownOption } from '@models';
import { CarTariff, Fuel, Transmission } from '@constants';

export const TARIFF_OPTIONS: DropdownOption[] = [
  { label: CarTariff.ECONOMY, value: CarTariff.ECONOMY },
  { label: CarTariff.COMFORT, value: CarTariff.COMFORT },
  { label: CarTariff.COMFORT_PLUS, value: CarTariff.COMFORT_PLUS },
  { label: CarTariff.BUSINESS, value: CarTariff.BUSINESS },
  { label: CarTariff.MINIVAN, value: CarTariff.MINIVAN },
  { label: CarTariff.DELIVERY, value: CarTariff.DELIVERY },
];

export const FUEL_OPTIONS: DropdownOption[] = [
  { label: Fuel.PETROL, value: Fuel.PETROL },
  { label: Fuel.DIESEL, value: Fuel.DIESEL },
  { label: Fuel.ELECTRO, value: Fuel.ELECTRO },
];

export const TRANSMISSION_OPTIONS: DropdownOption[] = [
  { label: Transmission.MECHANICAL, value: Transmission.MECHANICAL },
  { label: Transmission.AUTOMATIC, value: Transmission.AUTOMATIC },
  { label: Transmission.ROBOTIC, value: Transmission.ROBOTIC },
  { label: Transmission.VARIABLE, value: Transmission.VARIABLE },
];

export const ADDITIONAL_OPTIONS: DropdownOption[] = [
  { label: 'Фирменная оклейка', value: 'Фирменная оклейка' },
  { label: 'Желтые номера', value: 'Желтые номера' },
  { label: 'Детское кресло', value: 'Детское кресло' },
  // { label: 'Разрешено работать инвалидам', value: 'Разрешено работать инвалидам' },
  { label: 'Разрешено межгород', value: 'Разрешено межгород' },
];

export const FINANCIAL_OPTIONS: DropdownOption[] = [
  { label: 'Без комиссии', value: 'Без комиссии' },
  { label: 'Без залога', value: 'Без залога' },
  { label: 'С возможностью выкупа', value: 'С возможностью выкупа' },
];
