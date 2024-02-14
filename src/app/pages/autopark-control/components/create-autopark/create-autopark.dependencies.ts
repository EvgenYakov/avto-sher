import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepsModule } from 'primeng/steps';

export const CREATE_AUTOPARK_DEPS = [
  CommonModule,
  InputTextModule,
  ReactiveFormsModule,
  StepsModule,
  CheckboxModule,
  InputTextareaModule,
  ButtonModule,
];
