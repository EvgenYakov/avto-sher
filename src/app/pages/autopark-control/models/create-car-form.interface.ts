import { FormControl } from '@angular/forms';

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
  images: FormControl<string[]>;
}
