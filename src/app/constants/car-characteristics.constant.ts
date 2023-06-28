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

export enum RequestStatus {
  AVAILABLE = 'Доступна',
  UNAVAILABLE = 'Недоступна',
  WAITING = 'Ожидание',
}

export const REQUEST_STATUS_OPTIONS: DropdownOption[] = [
  { label: RequestStatus.AVAILABLE, value: RequestStatus.AVAILABLE },
  { label: RequestStatus.UNAVAILABLE, value: RequestStatus.UNAVAILABLE },
  { label: RequestStatus.WAITING, value: RequestStatus.WAITING },
]

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