import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

export const HISTORY_FILTER_DEPS = [
  CommonModule, CardModule, CalendarModule, CheckboxModule, ReactiveFormsModule, DropdownModule, InputNumberModule
]