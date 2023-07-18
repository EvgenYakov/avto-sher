import { DropdownOption } from '@models';

export enum CarTariff {
  ECONOMY = 'Эконом',
  COMFORT = 'Комфорт',
  COMFORT_PLUS = 'Комфорт плюс',
  BUSINESS = 'Бизнес',
  MINIVAN = 'Минивен',
  PREMIUM = 'Премиум'
}

export enum Transmission {
  MECHANICAL = 'Механика',
  AUTOMATIC = 'Автомат',
}

export enum Fuel {
  DIESEL = 'Дизель',
  PETROL = 'Бензин',
  GAS = 'Газ'
}

export const TARIFF_OPTIONS: DropdownOption[] = [
  { label: CarTariff.ECONOMY, value: CarTariff.ECONOMY },
  { label: CarTariff.COMFORT, value: CarTariff.COMFORT },
  { label: CarTariff.COMFORT_PLUS, value: CarTariff.COMFORT_PLUS },
  { label: CarTariff.BUSINESS, value: CarTariff.BUSINESS },
  { label: CarTariff.MINIVAN, value: CarTariff.MINIVAN },
  { label: CarTariff.PREMIUM, value: CarTariff.PREMIUM },
];

export const FUEL_OPTIONS: DropdownOption[] = [
  { label: Fuel.PETROL, value: Fuel.PETROL },
  { label: Fuel.DIESEL, value: Fuel.DIESEL },
  { label: Fuel.GAS, value: Fuel.GAS },
];

export const TRANSMISSION_OPTIONS: DropdownOption[] = [
  { label: Transmission.MECHANICAL, value: 'Механическая' },
  { label: Transmission.AUTOMATIC, value: 'Автоматическая' },
];

export const ADDITIONAL_OPTIONS: DropdownOption[] = [
  { label: 'Фирменная оклейка', value: 'Фирменная оклейка' },
  { label: 'Желтые номера', value: 'Желтые номера' },
  { label: 'Детское кресло', value: 'Детское кресло' },
  { label: 'Разрешено работать инвалидам', value: 'Разрешено работать инвалидам' },
  { label: 'Разрешено межгород', value: 'Разрешено межгород' },
];

export const FINANCIAL_OPTIONS: DropdownOption[] = [
  { label: 'Без комиссии', value: 'Без комиссии' },
  { label: 'Без залога', value: 'Без залога' },
  { label: 'С возможностью выкупа', value: 'С возможностью выкупа' },
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

export const MIN_RENTAL_PERIOD_OPTIONS: DropdownOption[] = [
  { label: 'От 1 дня', value: 1},
  { label: 'От 7 дня', value: 7},
  { label: 'От 14 дня', value: 14},
  { label: 'От 30 дня', value: 30},
]

export const WORK_SCHEDULE_OPTIONS: DropdownOption[] = [
  {label: '5/2', value:'5/2'},
  {label: '6/1', value:'6/1'},
  {label: '7/0', value:'7/0'},
]