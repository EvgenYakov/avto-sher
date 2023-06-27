import { DropdownOption } from '@models';

export enum CarTariff {
  ECONOMY = 'Эконом',
  COMFORT = 'Комфорт',
  COMFORT_PLUS = 'Комфорт плюс',
  BUSINESS = 'Бизнес',
  MINIVAN = 'Минивен',
  DELIVERY = 'Доставка'
}

export const TARIFF_OPTIONS: DropdownOption[] = [
  { label: CarTariff.ECONOMY, value: CarTariff.ECONOMY },
  { label: CarTariff.COMFORT, value: CarTariff.COMFORT },
  { label: CarTariff.COMFORT_PLUS, value: CarTariff.COMFORT_PLUS },
  { label: CarTariff.BUSINESS, value: CarTariff.BUSINESS },
  { label: CarTariff.MINIVAN, value: CarTariff.MINIVAN },
  { label: CarTariff.DELIVERY, value: CarTariff.DELIVERY },
];

export enum CarStatus {
  AVAILABLE = 'Доступна',
  UNAVAILABLE = 'Недоступна'
}

export enum Transmission {
  MECHANICAL = 'Механическая',
  AUTOMATIC = 'Автоматическая',
  ROBOTIC = 'Роботизированная',
  VARIABLE = 'Вариативная'
}

export enum Fuel {
  DIESEL = 'Дизель',
  PETROL = 'Бензин',
  ELECTRO = 'Электро'
}