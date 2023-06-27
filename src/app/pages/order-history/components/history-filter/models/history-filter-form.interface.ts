import { FormControl } from '@angular/forms';

export interface HistoryFilterForm {
  dateStart: FormControl<string>;
  dateFinish: FormControl<string>;
  tariff: FormControl<string[] | null>;
  brand: FormControl<string>;
  model: FormControl<string>;
  startPrice: FormControl<string>;
  endPrice: FormControl<string>;
}