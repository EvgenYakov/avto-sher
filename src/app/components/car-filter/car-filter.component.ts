import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ADDITIONAL_OPTIONS, FINANCIAL_OPTIONS, FUEL_OPTIONS, LoadingTypes, TRANSMISSION_OPTIONS } from '@constants';
import { DropdownOption } from '@models';
import { Store } from '@ngrx/store';
import { DropdownOptionsService } from '@services';
import {
  loadCars,
  loadModelsByBrand,
  loadUsedCarsBrands,
  selectCarBrands,
  selectCarModels,
  selectCarsFilterParams,
  selectCurrentRegion,
  selectLoading,
  setCarsFiltersParams,
} from '@store';
import { BehaviorSubject, map, Observable, Subject, switchMap, take, takeUntil, tap } from 'rxjs';

import { CAR_FILTER_DEPS } from './car-filter.dependencies';
import { FilterType, STATIC_DROPDOWNS } from './constant';
import { CarFilterForm, CarFilterParams } from './models';

@Component({
  selector: 'app-car-filter',
  standalone: true,
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.scss'],
  imports: [CAR_FILTER_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarFilterComponent implements OnInit, OnDestroy {
  @Input() filterType: FilterType;

  public readonly dropdowns = STATIC_DROPDOWNS;
  public readonly transmission = TRANSMISSION_OPTIONS;
  public readonly fuel = FUEL_OPTIONS;
  public readonly additional = ADDITIONAL_OPTIONS;
  public readonly financial = FINANCIAL_OPTIONS;

  public filterForm: FormGroup<CarFilterForm>;
  public isOpenAdditionalFilters: boolean = false;

  public areModelsLoaded$: Observable<boolean>;
  public brands$: Observable<DropdownOption[]>;
  public models$: Observable<DropdownOption[]>;

  private isModelDisabled$ = new BehaviorSubject(true);
  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private dropdownOptionMapper: DropdownOptionsService
  ) {}

  ngOnInit(): void {
    this.filterForm = this.initializeForm();

    this.getDataFromStore();
    this.initializeModels();
    this.modelDisabled();

    this.filterForm.valueChanges
      .pipe(
        tap(() => {
          const params = this.filterForm.value as CarFilterParams;

          const filteredParams: CarFilterParams = {
            startPrice: params.startPrice,
            endPrice: params.endPrice,
            type: params.type?.length === 0 ? null : params.type,
            brand: params.brand,
            model: params.model,
            fuel: params.fuel?.length === 0 ? null : params.fuel,
            transmission: params.transmission?.length === 0 ? null : params.transmission,
            additionalInfo: params.additionalInfo?.length === 0 ? null : params.additionalInfo,
            financialInfo: params.financialInfo?.length === 0 ? null : params.financialInfo,
            minRentPeriod: params.minRentPeriod,
            rentSchedule: params.rentSchedule?.length === 0 ? null : params.rentSchedule,
          };

          this.store.dispatch(setCarsFiltersParams({ params: filteredParams }));
        }),
        switchMap(() => {
          return this.store.select(selectCurrentRegion).pipe(takeUntil(this.destroy$));
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(region => {
        this.store.dispatch(loadCars({ regionName: region.name }));
      });
  }

  private initializeModels(): void {
    this.filterForm.controls.brand.valueChanges
      .pipe(
        switchMap(brand =>
          this.store.select(selectCurrentRegion).pipe(
            takeUntil(this.destroy$),
            map(region => ({ regionName: region.name, brand }))
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(({ regionName, brand }) => {
        if (!brand) {
          this.isModelDisabled$.next(true);
          this.filterForm.controls.model.reset();
          return;
        }
        this.store.dispatch(loadModelsByBrand({ regionName, brand }));
      });
  }

  private initializeForm(): FormGroup<CarFilterForm> {
    return new FormGroup<CarFilterForm>(<CarFilterForm>{
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
    });
  }

  private getDataFromStore(): void {
    this.areModelsLoaded$ = this.store.select(selectLoading, { type: LoadingTypes.CAR_MODELS });

    this.store
      .select(selectCurrentRegion)
      .pipe(takeUntil(this.destroy$))
      .subscribe(region => {
        this.store.dispatch(loadUsedCarsBrands({ regionName: region.name }));
      });

    this.brands$ = this.store
      .select(selectCarBrands)
      .pipe(map(brands => this.dropdownOptionMapper.mapToDropdownOptions(brands)));

    this.models$ = this.store.select(selectCarModels).pipe(
      map(models => {
        if (models.length) {
          this.isModelDisabled$.next(false);
        }
        return this.dropdownOptionMapper.mapToDropdownOptions(models);
      })
    );

    this.store
      .select(selectCarsFilterParams)
      .pipe(take(1))
      .subscribe((params: CarFilterParams) => {
        if (params) {
          this.filterForm.patchValue({ ...params });
        }
      });
  }

  private modelDisabled(): void {
    this.isModelDisabled$.pipe(takeUntil(this.destroy$)).subscribe(isDisabled => {
      isDisabled ? this.filterForm.controls.model.disable() : this.filterForm.controls.model.enable();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
