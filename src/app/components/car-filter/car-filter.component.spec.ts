import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CarFilterParams } from '@components';
import { Store, StoreModule } from '@ngrx/store';
import { DropdownOptionsService } from '@services';
import {
  loadUsedCarsBrands,
  selectCarBrands,
  selectCarModels,
  selectCarsFilterParams,
  selectCurrentRegion,
  selectLoading,
} from '@store';
import { of } from 'rxjs';

import { CarFilterComponent } from './car-filter.component';

describe('CarFilterComponent', () => {
  let component: CarFilterComponent;
  let fixture: ComponentFixture<CarFilterComponent>;
  let store: jasmine.SpyObj<Store>;
  let dropdownOptionsService: jasmine.SpyObj<DropdownOptionsService>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    dropdownOptionsService = jasmine.createSpyObj('DropdownOptionsService', ['mapToDropdownOptions']);

    await TestBed.configureTestingModule({
      imports: [CarFilterComponent, ReactiveFormsModule, StoreModule.forRoot({})],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: DropdownOptionsService, useValue: dropdownOptionsService },
      ],
    }).compileComponents();

    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    fixture = TestBed.createComponent(CarFilterComponent);
    component = fixture.componentInstance;

    store.select.and.callFake((selector: any) => {
      switch (selector) {
        case selectCurrentRegion:
          return of({ name: 'TestRegion' });
        case selectLoading:
          return of(false);
        case selectCarBrands:
          return of([]);
        case selectCarModels:
          return of(['test', 'test2']);
        case selectCarsFilterParams:
          return of({});
        default:
          return of(null);
      }
    });

    dropdownOptionsService.mapToDropdownOptions.and.returnValue([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form on init', () => {
    expect(component.filterForm).toBeDefined();
  });

  it('should dispatch loadUsedCarsBrands on init', () => {
    expect(store.dispatch).toHaveBeenCalledWith(loadUsedCarsBrands({ regionName: 'TestRegion' }));
  });

  it('should disable model control if brand is not selected', () => {
    component.filterForm.controls.brand.setValue('');
    expect(component.filterForm.controls.model.disabled).toBeTrue();
  });

  it('should enable model control if brand is selected', () => {
    component.filterForm.controls.brand.setValue('TestBrand', { emitEvent: true });

    expect(component.filterForm.controls.model.enabled).toBeTrue();
  });

  // it('should dispatch setCarsFiltersParams on form value changes', () => {
  //   const expectedParams: CarFilterParams = {
  //     startPrice: 1000,
  //     endPrice: 0,
  //     type: null,
  //     brand: '',
  //     model: '',
  //     fuel: null,
  //     transmission: null,
  //     additionalInfo: null,
  //     financialInfo: null,
  //     minRentPeriod: 0,
  //     rentSchedule: null,
  //   };
  //
  //   component.filterForm.controls.startPrice.setValue(1000);
  //   component.filterForm.controls.endPrice.setValue(0);
  //   component.filterForm.controls.minRentPeriod.setValue(0);
  //
  //   expect(store.dispatch).toHaveBeenCalledWith({
  //     params: jasmine.objectContaining({
  //       startPrice: 1000,
  //       endPrice: 0,
  //       type: null,
  //       brand: '',
  //       model: '',
  //       fuel: null,
  //       transmission: null,
  //       additionalInfo: null,
  //       financialInfo: null,
  //       minRentPeriod: 0,
  //       rentSchedule: null,
  //     }),
  //   });
  // });
});
