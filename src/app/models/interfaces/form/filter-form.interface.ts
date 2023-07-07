import { FormControl } from '@angular/forms';

export interface FilterForm {
  type: FormControl<string | null>;
  brand: FormControl<string | null>;
  model: FormControl<string | null>;
  fuel: FormControl<string | null>;
  transmission: FormControl<string | null>;
  startPrice: FormControl<number | null>;
  endPrice: FormControl<number | null>;
  additionalInfo: FormControl<string[] | null>;
  financialInfo: FormControl<string[] | null>;
}
