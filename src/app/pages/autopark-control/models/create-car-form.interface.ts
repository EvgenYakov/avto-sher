import { FormControl } from '@angular/forms';

export interface CreateCarForm {
  brand: FormControl<string>;
  model: FormControl<string>;
  yearCreated: FormControl<number | null>;
  transmission: FormControl<string>;
  fuelType: FormControl<string>;
  power: FormControl<number | null>;
  tariff: FormControl<string>;
}