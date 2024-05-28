import { FormControl } from '@angular/forms';

export interface CreateBaseAutoparkForm {
  title: FormControl<string>;
  description: FormControl<string>;
  address: FormControl<string>;
  phoneNumber: FormControl<string>;
  region: FormControl<string>;
  logo: FormControl<File>;
}

export interface AutoparkCustomBonusesForm {}

export interface CreateAutopark {
  title: string;
  description: string;
  address: string;
  phoneNumber: string;
  region: string;
  logo: File;
}
