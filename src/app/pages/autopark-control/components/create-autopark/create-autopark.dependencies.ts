import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

export const CREATE_AUTOPARK_DEPS = [
  CommonModule, InputTextModule, ReactiveFormsModule, StepsModule, CheckboxModule, InputTextareaModule, ButtonModule
]