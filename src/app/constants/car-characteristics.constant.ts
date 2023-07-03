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
}

export enum Fuel {
  DIESEL = 'Дизель',
  PETROL = 'Бензин',
  GAS = 'Газ'
}

export const MIN_RENTAL_PERIOD: DropdownOption[] = [
  { label: 'От 1 дня', value: 'От 1 дня'},
  { label: 'От 7 дня', value: 'От 7 дня'},
  { label: 'От 14 дня', value: 'От 14 дня'},
  { label: 'От 30 дня', value: 'От 30 дня'},
]

export const WORK_SCHEDULE: DropdownOption[] = [
  {label: '5/2', value:'5/2'},
  {label: '6/1', value:'6/1'},
  {label: '7/0', value:'7/0'},
]