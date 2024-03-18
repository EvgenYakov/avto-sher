import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';

export const CAR_FILTER_DEPS = [
  FormsModule,
  ReactiveFormsModule,
  SelectButtonModule,
  NgFor,
  DropdownModule,
  InputNumberModule,
  CheckboxModule,
  ButtonModule,
  AsyncPipe,
];
