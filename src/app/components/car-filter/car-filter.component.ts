import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BehaviorSubject, map, Observable, Subject, take, takeUntil } from 'rxjs';

import { ADDITIONAL_OPTIONS, FINANCIAL_OPTIONS, FUEL_OPTIONS, LoadingTypes, TRANSMISSION_OPTIONS } from '@constants';
import { DropdownOption } from '@models';
import { DropdownOptionsService } from '@services';
import {
  loadCars,
  loadModelsByBrand,
  loadUsedCarsBrands,
  selectCarBrands,
  selectCarModels,
  selectCarsFilterParams,
  selectLoading, setCarsFiltersParams
} from '@store';

import { FilterType, STATIC_DROPDOWNS } from './constant';
import { CarFilterForm, CarFilterParams } from './models';
import { CAR_FILTER_DEPS } from './car-filter.dependencies';

@Component( {
  selector: 'app-car-filter',
  standalone: true,
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.scss'],
  imports: [CAR_FILTER_DEPS],
} )
export class CarFilterComponent implements OnInit, OnDestroy {
  @Input() filterType: FilterType;

  public readonly dropdowns = STATIC_DROPDOWNS;
  public readonly transmission = TRANSMISSION_OPTIONS;
  public readonly fuel = FUEL_OPTIONS;
  public readonly additional = ADDITIONAL_OPTIONS;
  public readonly financial = FINANCIAL_OPTIONS;

  public filterForm: FormGroup<CarFilterForm>
  public isOpenAdditionalFilters: boolean = false;

  public areModelsLoaded$: Observable<boolean>;
  public brands$: Observable<DropdownOption[]>;
  public models$: Observable<DropdownOption[]>;


  private isModelDisabled$ = new BehaviorSubject( true );
  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private dropdownOptionMapper: DropdownOptionsService
  ) {}

  ngOnInit(): void {
    this.store.dispatch( loadUsedCarsBrands() );

    this.filterForm = this.initializeForm();
    this.getDataFromStore();

    this.filterForm.controls.brand.valueChanges.pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (brand) => {
      if (brand) {
        this.store.dispatch( loadModelsByBrand( { brand } ) );
      } else {
        this.isModelDisabled$.next( true );
      }
    } );

    this.modelDisabled();

    this.filterForm.valueChanges.pipe(
    ).subscribe( () => {
      const params = this.filterForm.value as CarFilterParams;

      this.store.dispatch( setCarsFiltersParams( { params } ) );
      this.store.dispatch( loadCars() );
    } )
  }

  private initializeForm(): FormGroup<CarFilterForm> {
    return new FormGroup<CarFilterForm>( <CarFilterForm>{
      type: new FormControl(),
      minRentPeriod: new FormControl(),
      rentSchedule: new FormControl(),
      startPrice: new FormControl(),
      endPrice: new FormControl(),
      brand: new FormControl(),
      model: new FormControl(),
      transmission: new FormControl(),
      fuel: new FormControl(),
      additionalInfo: new FormControl(),
      financialInfo: new FormControl(),
    } );
  }

  private getDataFromStore(): void {
    this.areModelsLoaded$ = this.store.select( selectLoading, { type: LoadingTypes.CAR_MODELS } );

    this.brands$ = this.store.select( selectCarBrands ).pipe(
      map( (brands) => this.dropdownOptionMapper.mapToDropdownOptions( brands ) )
    );

    this.models$ = this.store.select( selectCarModels ).pipe(
      map( (models) => {
        if (models.length) {
          this.isModelDisabled$.next( false );
        }
        return this.dropdownOptionMapper.mapToDropdownOptions( models )
      } ),
    );

    this.store.select( selectCarsFilterParams ).pipe(
      take( 1 )
    ).subscribe( (params: CarFilterParams) => {
      if (params) {
        this.filterForm.patchValue( { ...params} );
      }
    } );
  }

  private modelDisabled(): void {
    this.isModelDisabled$.pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (isDisabled) => {
      isDisabled
        ? this.filterForm.controls.model.disable()
        : this.filterForm.controls.model.enable();
    } )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
