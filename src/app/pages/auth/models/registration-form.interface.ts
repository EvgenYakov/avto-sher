import { FormControl } from '@angular/forms';

export interface RegistrationForm {
  fullName: FormControl<string>;
  phoneNumber: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface RegisterDto {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
}

export interface RegisterOwner extends Omit<RegisterDto, 'phoneNumber'>{}