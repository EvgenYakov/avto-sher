import { FormControl } from '@angular/forms';

export interface HistoryFilterForm {
  dateStart?: FormControl<string>;
  dateFinish?: FormControl<string>;
  requestStatuses?: FormControl<string[] | null>;
  tariff: FormControl<string[] | null>;
  brand: FormControl<string>;
  model: FormControl<string>;
  startPrice: FormControl<string>;
  endPrice: FormControl<string>;
}