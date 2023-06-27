import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import { BehaviorSubject, map, Observable, Subject, takeUntil } from 'rxjs';

import { LoadingTypes, TARIFF_OPTIONS } from '@constants';
import { loadModelsByBrand, loadUsedCarsBrands, selectCarBrands, selectCarModels, selectLoading } from '@store';
import { DropdownOptionsService } from '@services';
import { DropdownOption } from '@models';

import { HistoryFilterForm } from './models/history-filter-form.interface';
import { HISTORY_FILTER_DEPS } from './history-filter.dependencies';

@Component( {
  selector: 'app-history-filter',
  standalone: true,
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss'],
  imports: [HISTORY_FILTER_DEPS],
} )
export class HistoryFilterComponent implements OnInit, OnDestroy {

  public readonly tariffs = TARIFF_OPTIONS;

  public areModelsLoaded$: Observable<boolean>;
  public brands$: Observable<DropdownOption[]>;
  public models$: Observable<DropdownOption[]>;

  public historyFilterForm: FormGroup<HistoryFilterForm>


  private isModelDisabled$ = new BehaviorSubject( true );
  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private dropdownOptionMapper: DropdownOptionsService
  ) {}

  ngOnInit(): void {
    this.store.dispatch( loadUsedCarsBrands() );

    this.historyFilterForm = this.initializeForm();
    this.getDataFromStore();

    this.historyFilterForm.controls.brand.valueChanges.pipe(
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

  private initializeForm(): FormGroup<HistoryFilterForm> {
    return new FormGroup<HistoryFilterForm>( <HistoryFilterForm>{
      dateStart: new FormControl(),
      dateFinish: new FormControl(),
      tariff: new FormControl(),
      brand: new FormControl(),
      model: new FormControl(),
      startPrice: new FormControl(),
      endPrice: new FormControl(),
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
        ? this.historyFilterForm.controls.model.disable()
        : this.historyFilterForm.controls.model.enable();
    } )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
