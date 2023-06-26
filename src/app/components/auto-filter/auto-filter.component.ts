import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import { combineLatest, map, Observable, of, startWith, Subject, switchMap, takeUntil } from 'rxjs';

import { Dropdown, DropdownOption, FilterForm, FilterParams } from '@models';
import { filterCar, loadModelsByBrand, loadUsedCarsBrands, selectCarBrands, selectCarModels } from '@store';

import {
  ADDITIONAL_OPTIONS,
  FINANCIAL_OPTIONS,
  FUEL_OPTIONS,
  TARIFF_OPTIONS,
  TRANSMISSION_OPTIONS,
} from './constants/characteristics.constants';
import { AUTO_FILTER_DEPS } from './auto-filter.dependencies';

@Component( {
  selector: 'app-car-filter',
  templateUrl: './auto-filter.component.html',
  styleUrls: ['./auto-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AUTO_FILTER_DEPS]
} )
export class AutoFilterComponent implements OnInit, OnDestroy {

  public dropdowns: Dropdown[];
  public tariffOptions: DropdownOption[] = TARIFF_OPTIONS;
  public additionalOptions: DropdownOption[] = ADDITIONAL_OPTIONS;
  public financialOptions: DropdownOption[] = FINANCIAL_OPTIONS;

  public filterForm: FormGroup<FilterForm>;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch( loadUsedCarsBrands() );
    this.filterForm = this.initializeForm();
    this.initializeDropdowns().pipe(
      takeUntil( this.destroy$ )
    ).subscribe( dropdowns => {
      this.dropdowns = dropdowns;
    } );
  }

  public onSubmit(): void {
    const filterParams = this.filterForm.value as FilterParams;
    this.store.dispatch( filterCar( { filterParams } ) );
  }

  private initializeDropdowns(): Observable<Dropdown[]> {
    return this.store.select( selectCarBrands ).pipe(
      switchMap( brands => {
        const brandOptions: DropdownOption[] = brands.map( option => ({
          label: option,
          value: option
        }) );

        return combineLatest( [
          of( brandOptions ),
          this.filterForm.controls.brand.valueChanges.pipe( startWith( '' ) )
        ] );
      } ),
      switchMap( ([brandOptions, selectedBrand]) => {
        if(selectedBrand) {
          this.store.dispatch( loadModelsByBrand( { brand: selectedBrand } ) );
          return this.store.select( selectCarModels ).pipe(
            map( models => models.map( option => ({
              label: option,
              value: option
            }) ) ),
            map( modelOptions => this.createDropdowns( brandOptions, modelOptions ) )
          );
        } else {
          const emptyModelOptions: DropdownOption[] = [];
          return of( this.createDropdowns( brandOptions, emptyModelOptions ) );
        }
      } )
    );
  }

  private createDropdowns(
    brandOptions: DropdownOption[],
    modelOptions: DropdownOption[]
  ): Dropdown[] {
    return [
      {
        formControlName: 'brand',
        placeholder: 'Выберите марку',
        options: brandOptions,
      },
      {
        formControlName: 'model',
        placeholder: 'Выберите модель',
        options: modelOptions,
      },
      {
        formControlName: 'fuel',
        placeholder: 'Топливо',
        options: FUEL_OPTIONS
      },
      {
        formControlName: 'transmission',
        placeholder: 'Коробка',
        options: TRANSMISSION_OPTIONS,
      },
    ];
  }

  private initializeForm(): FormGroup<FilterForm> {
    return new FormGroup( <FilterForm>{
      type: new FormControl(),
      brand: new FormControl(),
      model: new FormControl(),
      fuel: new FormControl(),
      transmission: new FormControl(),
      startPrice: new FormControl(),
      endPrice: new FormControl(),
      additionalInfo: new FormControl(),
      financialInfo: new FormControl(),
    } );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
