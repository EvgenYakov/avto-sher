import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

import { AutoFilterComponent } from '@components';

@NgModule({
  declarations: [AutoFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    CheckboxModule,
    ButtonModule,
  ],
  exports: [AutoFilterComponent],
})
export class AutoFilterModule {}
