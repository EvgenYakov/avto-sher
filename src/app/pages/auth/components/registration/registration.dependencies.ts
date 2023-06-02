import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';

import { PasswordInputComponent, PhoneInputComponent, TextInputComponent } from '@components';

export const REGISTRATION_DEPS = [
  FormsModule, ReactiveFormsModule, TabViewModule, TextInputComponent, PhoneInputComponent, PasswordInputComponent, CheckboxModule, ButtonModule];