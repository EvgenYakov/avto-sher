import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

import { ADDITIONAL_OPTIONS, FUEL_OPTIONS, TARIFF_OPTIONS, TRANSMISSION_OPTIONS } from '@constants';

import { CreateCarForm } from '../../models';
import { FULL_FINANCIAL_OPTIONS } from '../../constants';
import { CREATE_CAR_DEPS } from './create-car.dependencies';

@Component( {
  selector: 'app-create-car',
  standalone: true,
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss'],
  imports: [CREATE_CAR_DEPS, InputTextModule],
} )
export class CreateCarComponent {
  public readonly financialOptions = FULL_FINANCIAL_OPTIONS;
  public readonly transmission = TRANSMISSION_OPTIONS;
  public readonly fuelTypes = FUEL_OPTIONS;
  public readonly tariffTypes = TARIFF_OPTIONS;
  public readonly additionalInfo = ADDITIONAL_OPTIONS;

  public carForm: FormGroup<CreateCarForm>;

  ngOnInit(): void {
    this.carForm = this.initializeForm();
  }

  public getCurrentYear(): number {
    return (new Date).getFullYear();
  }

  private initializeForm(): FormGroup<CreateCarForm> {
    return new FormGroup<CreateCarForm>( <CreateCarForm>{
      brand: new FormControl<string>( '', [Validators.required] ),
      model: new FormControl<string>( '', [Validators.required] ),
      yearCreated: new FormControl<number | null>( null, [Validators.required] ),
      transmission: new FormControl<string>( '', [Validators.required] ),
      fuelType: new FormControl<string>( '', [Validators.required] ),
      power: new FormControl<number | null>( null, [Validators.required] ),
      tariff: new FormControl<string>( '', [Validators.required] ),
    } );
  }

  public onSubmit(): void {
    console.log( this.carForm.value )
  }
}
