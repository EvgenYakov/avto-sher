import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BehaviorSubject, map, Observable, Subject, takeUntil, throttleTime } from 'rxjs';

import { ADDITIONAL_OPTIONS, FINANCIAL_OPTIONS, FUEL_OPTIONS, LoadingTypes, TRANSMISSION_OPTIONS } from '@constants';
import { DropdownOption } from '@models';
import { DropdownOptionsService } from '@services';
import { loadModelsByBrand, loadUsedCarsBrands, selectCarBrands, selectCarModels, selectLoading } from '@store';

import { FilterType } from './constant/filter-type.enum';
import { CarFilterForm } from './models/sidenav-filter-form.interface';
import { STATIC_DROPDOWNS } from './constant/static-dropdowns.constant';
import { CAR_FILTER_DEPS } from './car-filter.dependencies';

@Component( {
  selector: 'app-car-filter',
  standalone: true,
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.scss'],
  imports: [CAR_FILTER_DEPS],
} )
export class CarFilterComponent {
  @Input() filterType: FilterType;

  public readonly dropdowns = STATIC_DROPDOWNS;
  public readonly transmission = TRANSMISSION_OPTIONS;
  public readonly fuel = FUEL_OPTIONS;
  // public readonly additionalShort = ADDITIONAL_OPTIONS.slice( 0, 2 );
  public readonly additional = ADDITIONAL_OPTIONS;
  public readonly financial = FINANCIAL_OPTIONS;

  public areModelsLoaded$: Observable<boolean>;
  public brands$: Observable<DropdownOption[]>;
  public models$: Observable<DropdownOption[]>;

  public filterForm: FormGroup<CarFilterForm>

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
      if(brand) {
        this.store.dispatch( loadModelsByBrand( { brand } ) );
      } else {
        this.isModelDisabled$.next( true );
      }
    } );

    this.modelDisabled();

    this.filterForm.valueChanges.pipe(
      throttleTime( 1000 )
    ).subscribe( (filterForm) => {
      console.log( filterForm )
    } )
  }

  private initializeForm(): FormGroup<CarFilterForm> {
    return new FormGroup<CarFilterForm>( <CarFilterForm>{
      tariff: new FormControl(),
      rentalPeriod: new FormControl(),
      workSchedule: new FormControl(),
      startPrice: new FormControl(),
      endPrice: new FormControl(),
      brand: new FormControl(),
      model: new FormControl(),
      transmission: new FormControl(),
      fuelType: new FormControl(),
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
        if(models.length) {
          this.isModelDisabled$.next( false );
        }
        return this.dropdownOptionMapper.mapToDropdownOptions( models )
      } ),
    );
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

  protected readonly FilterType = FilterType;
  protected readonly ADDITIONAL_OPTIONS = ADDITIONAL_OPTIONS;
}
