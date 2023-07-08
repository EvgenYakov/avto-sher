import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';

export const CAR_FILTER_DEPS = [
  CommonModule, CalendarModule, CheckboxModule, DropdownModule, InputNumberModule, ReactiveFormsModule, SelectButtonModule, MultiSelectModule
]