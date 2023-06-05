import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';

import { TextInputComponent } from '../../../../components/controls/text-input/text-input.component';
import { PasswordInputComponent } from '../../../../components/controls/password-input/password-input.component';


export const LOGIN_DEPS = [
  FormsModule, ReactiveFormsModule, TextInputComponent, PasswordInputComponent, RouterLink, ButtonModule
];