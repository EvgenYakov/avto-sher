import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  ADDITIONAL_OPTIONS,
  FUEL_OPTIONS,
  MIN_RENTAL_PERIOD_OPTIONS,
  TARIFF_OPTIONS,
  TRANSMISSION_OPTIONS,
  WORK_SCHEDULE_OPTIONS,
} from '@constants';
import { Dropdown } from '@models';
import { Store } from '@ngrx/store';
import { InputTextModule } from 'primeng/inputtext';

import { FULL_FINANCIAL_OPTIONS } from '../../constants';
import { CreateCarForm } from '../../models';

import { CREATE_CAR_DEPS } from './create-car.dependencies';

@Component({
  selector: 'app-create-car',
  standalone: true,
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss'],
  imports: [CREATE_CAR_DEPS, InputTextModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCarComponent implements OnInit {
  public readonly financialOptions = FULL_FINANCIAL_OPTIONS;
  public readonly tariffTypes = TARIFF_OPTIONS;
  public readonly additionalInfo = ADDITIONAL_OPTIONS;

  public STATIC_DROPDOWNS: Dropdown[] = [
    {
      label: 'График работы',
      formControlName: 'rentSchedule',
      placeholder: 'График работы',
      options: WORK_SCHEDULE_OPTIONS,
    },
    {
      label: 'КПП',
      formControlName: 'transmission',
      placeholder: 'Выберите из списка',
      options: TRANSMISSION_OPTIONS,
    },
    {
      label: 'Тип топлива',
      formControlName: 'fuelType',
      placeholder: 'Выберите из списка',
      options: FUEL_OPTIONS,
    },
    {
      label: 'Срок аренды',
      formControlName: 'minRentPeriod',
      placeholder: 'Выберите срок аренды',
      options: MIN_RENTAL_PERIOD_OPTIONS,
    },
  ];

  public carForm: FormGroup<CreateCarForm>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.carForm = this.initializeForm();
  }

  public onSubmit(): void {}

  public getCurrentYear(): number {
    return new Date().getFullYear();
  }

  private initializeForm(): FormGroup<CreateCarForm> {
    return new FormGroup<CreateCarForm>(<CreateCarForm>{
      brand: new FormControl<string>('', [Validators.required]),
      model: new FormControl<string>('', [Validators.required]),
      yearOfRelease: new FormControl<number | null>(null, [Validators.required]),
      transmission: new FormControl<string>('', [Validators.required]),
      fuelType: new FormControl<string>('', [Validators.required]),
      enginePower: new FormControl<number | null>(null, [Validators.required]),
      type: new FormControl<string>('', [Validators.required]),
      rentSchedule: new FormControl<string>('', [Validators.required]),
      minRentPeriod: new FormControl<number>(0, [Validators.required]),
    });
  }
}
