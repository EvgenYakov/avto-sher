import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { PasswordInputComponent, TextInputComponent } from '@components';

export const LOGIN_DEPS = [
  FormsModule, ReactiveFormsModule, TextInputComponent, PasswordInputComponent, RouterLink, ButtonModule, NgIf, AsyncPipe
];