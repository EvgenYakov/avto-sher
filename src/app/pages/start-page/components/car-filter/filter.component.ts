import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CarFilterParams } from '@components';
import { ADDITIONAL_OPTIONS, AppRoutes, FINANCIAL_OPTIONS, LoadingTypes, TARIFF_OPTIONS } from '@constants';
import { Dropdown, DropdownOption, FilterForm } from '@models';
import { Store } from '@ngrx/store';
import { DropdownOptionsService } from '@services';
import {
  loadModelsByBrand,
  loadUsedCarsBrands,
  selectCarBrands,
  selectCarModels,
  selectCurrentRegion,
  selectLoading,
  setCarsFiltersParams,
} from '@store';
import { MultiSelectModule } from 'primeng/multiselect';
import { BehaviorSubject, map, Observable, Subject, switchMap, takeUntil } from 'rxjs';

import { STATIC_DROPDOWNS } from '../../constants/dropdowns.constant';

import { CAR_FILTER_DEPS } from './filter.dependencies';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-car-filter',
  standalone: true,
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  imports: [CAR_FILTER_DEPS, MultiSelectModule, NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit, OnDestroy {
  public readonly staticDropdowns: Dropdown[] = STATIC_DROPDOWNS;
  public readonly tariffOptions: DropdownOption[] = TARIFF_OPTIONS;
  public readonly additionalOptions: string[] = ADDITIONAL_OPTIONS.slice(0, 4);
  public readonly financialOptions: DropdownOption[] = FINANCIAL_OPTIONS;

  public areModelsLoaded$: Observable<boolean>;
  public brands$: Observable<DropdownOption[]>;
  public models$: Observable<DropdownOption[]>;

  public filterForm: FormGroup<FilterForm>;

  private isModelDisabled$ = new BehaviorSubject(true);

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private dropdownOptionMapper: DropdownOptionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filterForm = this.initializeForm();
    this.getDataFromStore();
    this.initializeModels();
    this.modelDisabled();
  }

  public onSubmit(): void {
    const filterParams = this.filterForm.value as unknown as CarFilterParams;
    this.router.navigate([`/${AppRoutes.MAIN}/${AppRoutes.CARS}`]);

    this.store.dispatch(
      setCarsFiltersParams({
        params: {
          ...filterParams,
          // fuel: filterParams.fuel,
          // type: filterParams.type,
          // transmission: filterParams.transmission,
        },
      })
    );
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
  }

  private modelDisabled(): void {
    this.isModelDisabled$.pipe(takeUntil(this.destroy$)).subscribe(isDisabled => {
      isDisabled ? this.filterForm.controls.model.disable() : this.filterForm.controls.model.enable();
    });
  }

  private initializeForm(): FormGroup<FilterForm> {
    return new FormGroup(<FilterForm>{
      type: new FormControl(),
      rentalPeriod: new FormControl(),
      workSchedule: new FormControl(),
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
