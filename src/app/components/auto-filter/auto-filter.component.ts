import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ADDITIONAL_OPTIONS, DROPDOWNS, FARE_OPTIONS, } from './constants/characteristics.constants';
import { AUTO_FILTER_DEPS } from './auto-filter.dependencies';
import { Dropdown, DropdownOption, FilterForm } from '@models';

@Component({
    selector: 'app-car-filter',
    templateUrl: './auto-filter.component.html',
    styleUrls: ['./auto-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [AUTO_FILTER_DEPS]
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
    console.log(this.filterForm.value)
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
