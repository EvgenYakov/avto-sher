import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  ADDITIONAL_OPTIONS,
  DROPDOWNS,
  FARE_OPTIONS,
} from './constants/characteristics.constants';
import { DropdownOption, FilterForm, Dropdown } from '@models';

@Component({
  selector: 'app-auto-filter',
  templateUrl: './auto-filter.component.html',
  styleUrls: ['./auto-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoFilterComponent implements OnInit {
  public dropdowns: Dropdown[] = DROPDOWNS;
  public fareOptions: DropdownOption[] = FARE_OPTIONS;
  public additionalOptions: DropdownOption[] = ADDITIONAL_OPTIONS;
  public filterForm: FormGroup<FilterForm>;

  ngOnInit(): void {
    this.filterForm = this.initializeForm();
  }

  public onSubmit(): void {
    console.log(this.filterForm.controls.fare.value);
    console.log(this.filterForm.controls.brand.value);
    console.log(this.filterForm.controls.model.value);
    console.log(this.filterForm.controls.fuel.value);
    console.log(this.filterForm.controls.gearbox.value);
    console.log(this.filterForm.controls.minPrice.value);
    console.log(this.filterForm.controls.maxPrice.value);
    console.log(this.filterForm.controls.additionalOptions.value);
  }

  private initializeForm(): FormGroup<FilterForm> {
    return new FormGroup({
      fare: new FormControl(),
      brand: new FormControl(),
      model: new FormControl(),
      fuel: new FormControl(),
      gearbox: new FormControl(),
      minPrice: new FormControl(),
      maxPrice: new FormControl(),
      additionalOptions: new FormControl(),
    });
  }
}
