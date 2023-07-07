import { FormControl } from '@angular/forms';

export interface CarFilterForm {
  // dateStart?: FormControl<string>;
  // dateFinish?: FormControl<string>;
  // requestStatuses?: FormControl<string[]>;
  type: FormControl<string[]>;
  rentalPeriod: FormControl<string[]>;
  workSchedule: FormControl<string[]>;
  brand: FormControl<string>;
  model: FormControl<string>;
  transmission: FormControl<string[]>;
  fuel: FormControl<string[]>;
  additionalInfo: FormControl<string[]>;
  financialInfo: FormControl<string[]>;
  startPrice: FormControl<number>;
  endPrice: FormControl<number>;
}

export interface CarFilterParams {
  startPrice: number;
  endPrice: number;
  type: string[];
  brand: string;
  model: string;
  fuel: string[];
  transmission: string[];
  additionalInfo: string[];
  financialInfo: string[];
  rentalPeriod: string[];
  workSchedule: string[];
}