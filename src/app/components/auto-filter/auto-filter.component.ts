import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import { BehaviorSubject, map, Observable, Subject, takeUntil } from 'rxjs';

import { Dropdown, DropdownOption, FilterForm, FilterParams } from '@models';
import {
  filterCar,
  loadModelsByBrand,
  loadUsedCarsBrands,
  selectCarBrands,
  selectCarModels,
  selectLoading
} from '@store';
import { LoadingTypes, TARIFF_OPTIONS } from '@constants';

import { DropdownOptionsService } from '../../services/mappers/dropdown-options.service';
import { ADDITIONAL_OPTIONS, FINANCIAL_OPTIONS, } from './constants/characteristics.constants';
import { AUTO_FILTER_DEPS } from './auto-filter.dependencies';
import { STATIC_DROPDOWNS } from './constants/dropdowns.constant';

@Component( {
  selector: 'app-car-filter',
  templateUrl: './auto-filter.component.html',
  styleUrls: ['./auto-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AUTO_FILTER_DEPS]
} )
export class AutoFilterComponent implements OnInit, OnDestroy {

  public readonly staticDropdowns: Dropdown[] = STATIC_DROPDOWNS;
  public readonly tariffOptions: DropdownOption[] = TARIFF_OPTIONS;
  public readonly additionalOptions: DropdownOption[] = ADDITIONAL_OPTIONS;
  public readonly financialOptions: DropdownOption[] = FINANCIAL_OPTIONS;

  public areModelsLoaded$: Observable<boolean>;
  public brands$: Observable<DropdownOption[]>;
  public models$: Observable<DropdownOption[]>;

  public filterForm: FormGroup<FilterForm>;

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
  }

  public onSubmit(): void {
    const filterParams = this.filterForm.value as FilterParams;
    this.store.dispatch( filterCar( { filterParams } ) );
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
