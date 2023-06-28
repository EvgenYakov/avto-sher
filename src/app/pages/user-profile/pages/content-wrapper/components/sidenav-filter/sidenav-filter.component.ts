import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import { BehaviorSubject, map, Observable, Subject, takeUntil } from 'rxjs';

import { LoadingTypes, REQUEST_STATUS_OPTIONS, TARIFF_OPTIONS } from '@constants';
import { loadModelsByBrand, loadUsedCarsBrands, selectCarBrands, selectCarModels, selectLoading } from '@store';
import { DropdownOptionsService } from '@services';
import { DropdownOption } from '@models';

import { FilterType } from '../../constant/filter-type.enum';
import { HistoryFilterForm } from './models/sidenav-filter-form.interface';
import { HISTORY_FILTER_DEPS } from './sidenav-filter.dependencies';

@Component( {
  selector: 'app-sidenav-filter',
  standalone: true,
  templateUrl: './sidenav-filter.component.html',
  styleUrls: ['./sidenav-filter.component.scss'],
  imports: [HISTORY_FILTER_DEPS],
} )
export class SidenavFilterComponent implements OnInit, OnDestroy {

  @Input() filterType: FilterType;

  public readonly tariffs = TARIFF_OPTIONS;
  public readonly requestStatuses = REQUEST_STATUS_OPTIONS;

  public areModelsLoaded$: Observable<boolean>;
  public brands$: Observable<DropdownOption[]>;
  public models$: Observable<DropdownOption[]>;

  public sidenavFilterForm: FormGroup<HistoryFilterForm>


  private isModelDisabled$ = new BehaviorSubject( true );
  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private dropdownOptionMapper: DropdownOptionsService
  ) {}

  ngOnInit(): void {
    this.store.dispatch( loadUsedCarsBrands() );

    this.sidenavFilterForm = this.initializeForm();
    this.getDataFromStore();

    this.sidenavFilterForm.controls.brand.valueChanges.pipe(
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
      requestStatuses: new FormControl(),
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
        ? this.sidenavFilterForm.controls.model.disable()
        : this.sidenavFilterForm.controls.model.enable();
    } )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected readonly FilterType = FilterType;
}
