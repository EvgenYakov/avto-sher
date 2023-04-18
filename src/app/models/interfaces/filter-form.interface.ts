import { FormControl } from '@angular/forms';

export interface FilterForm {
  fare: FormControl<string | null>;
  brand: FormControl<string | null>;
  model: FormControl<string | null>;
  fuel: FormControl<string | null>;
  gearbox: FormControl<string | null>;
  minPrice: FormControl<number | null>;
  maxPrice: FormControl<number | null>;
  additionalOptions: FormControl<string[] | null>;
}
