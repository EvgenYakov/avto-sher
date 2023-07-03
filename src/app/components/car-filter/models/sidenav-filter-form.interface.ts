import { FormControl } from '@angular/forms';

export interface CarFilterForm {
  // dateStart?: FormControl<string>;
  // dateFinish?: FormControl<string>;
  // requestStatuses?: FormControl<string[]>;
  tariff: FormControl<string[]>;
  rentalPeriod: FormControl<string[]>;
  workSchedule: FormControl<string[]>;
  brand: FormControl<string>;
  model: FormControl<string>;
  transmission: FormControl<string>;
  fuelType: FormControl<string>;
  additionalInfo: FormControl<string[]>;
  financialInfo: FormControl<string[]>;
  startPrice: FormControl<string>;
  endPrice: FormControl<string>;
}