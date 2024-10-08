import { FormControl } from '@angular/forms';
import { RequestStatus } from '@constants';

export interface CreateCarForm {
  id: FormControl<number | null>;
  brand: FormControl<string>;
  model: FormControl<string>;
  yearOfRelease: FormControl<number | null>;
  transmission: FormControl<string>;
  fuelType: FormControl<string>;
  enginePower: FormControl<number | null>;
  type: FormControl<string>;
  additionalInfo: FormControl<string[]>;
  financialInfo: FormControl<string[]>;
  price: FormControl<number>;
  rentSchedule: FormControl<string>;
  minRentPeriod: FormControl<number>;
  rentalConditions: FormControl<string[]>;
  STS: FormControl<string>;
  VIN: FormControl<string>;
  carStateNumber: FormControl<string>;
  status: FormControl<RequestStatus | null>;
}

export interface IDepositForm {
  status: FormControl<EDepositStatus | null>;
  value: FormControl<number | null>;
}

export interface ICommissionForm {
  status: FormControl<ECommissionStatus | null>;
  value: FormControl<number | null>;
}

export enum EDepositStatus {
  DEPOSIT = 'Залог',
  NON_DEPOSIT = 'Без залога',
}

export enum ECommissionStatus {
  COMMISSION = 'Коммисия',
  NON_COMMISSION = 'Без комиссии',
}

export enum EOppotrunityBuyCar {
  EXISTS = 'Есть возможность выкупа',
  EXISTS_WITH_PRICE = 'Цена выкупа авто',
}
