import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FileUploadComponent } from '@components';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';

export const CREATE_CAR_DEPS = [
  CommonModule,
  FileUploadComponent,
  ButtonModule,
  DropdownModule,
  InputNumberModule,
  ReactiveFormsModule,
  CheckboxModule,
  MultiSelectModule,
];
