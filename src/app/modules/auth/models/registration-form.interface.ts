import { FormControl } from '@angular/forms';

export interface RegistrationForm {
  fio: FormControl<string>;
  phone: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface RegisterDto {
  fio: string;
  phone: string;
  email: string;
  password: string;
  type: string;
}