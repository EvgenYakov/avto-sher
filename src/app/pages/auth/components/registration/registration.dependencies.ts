import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';

import { TextInputComponent } from '../../../../components/controls/text-input/text-input.component';
import { PhoneInputComponent } from '../../../../components/controls/phone-input/phone-input.component';
import { PasswordInputComponent } from '../../../../components/controls/password-input/password-input.component';


export const REGISTRATION_DEPS = [
  FormsModule, ReactiveFormsModule, TabViewModule, TextInputComponent, PhoneInputComponent,
  PasswordInputComponent, CheckboxModule, ButtonModule, AsyncPipe
];