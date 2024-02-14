import { FormControl } from '@angular/forms';

export interface CarFilterForm {
  type: FormControl<string[] | null>;
  minRentPeriod: FormControl<number>;
  rentSchedule: FormControl<string[] | null>;
  brand: FormControl<string>;
  model: FormControl<string>;
  transmission: FormControl<string[] | null>;
  fuel: FormControl<string[] | null>;
  additionalInfo: FormControl<string[] | null>;
  financialInfo: FormControl<string[] | null>;
  startPrice: FormControl<number>;
  endPrice: FormControl<number>;
}

export interface CarFilterParams {
  startPrice: number;
  endPrice: number;
  type: string[] | null;
  brand: string;
  model: string;
  fuel: string[] | null;
  transmission: string[] | null;
  additionalInfo: string[] | null;
  financialInfo: string[] | null;
  minRentPeriod: number;
  rentSchedule: string[] | null;
}
