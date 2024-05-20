import { FormControl } from '@angular/forms';

export interface IRegistrationForm {
  fullName: FormControl<string>;
  phoneNumber: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface IRegisterDto {
  id?: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
}

export interface RegisterOwner extends Omit<IRegisterDto, 'phoneNumber'> {}
