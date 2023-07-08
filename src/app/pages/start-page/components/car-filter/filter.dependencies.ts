import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgFor } from '@angular/common';

import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

export const CAR_FILTER_DEPS = [
  FormsModule, ReactiveFormsModule,
  SelectButtonModule, NgFor, DropdownModule, InputNumberModule, CheckboxModule, ButtonModule,
  AsyncPipe
];