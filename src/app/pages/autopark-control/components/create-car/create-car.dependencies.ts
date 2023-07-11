import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';

import { FileUploadComponent } from '@components';

export const CREATE_CAR_DEPS = [
  CommonModule, FileUploadComponent, ButtonModule, DropdownModule, InputNumberModule, ReactiveFormsModule, CheckboxModule, MultiSelectModule
]