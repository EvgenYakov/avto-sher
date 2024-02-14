import { AsyncPipe, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { PasswordInputComponent } from '../../../../components/controls/password-input/password-input.component';
import { TextInputComponent } from '../../../../components/controls/text-input/text-input.component';

export const LOGIN_DEPS = [
  FormsModule,
  ReactiveFormsModule,
  TextInputComponent,
  PasswordInputComponent,
  RouterLink,
  ButtonModule,
  NgIf,
  AsyncPipe,
];
