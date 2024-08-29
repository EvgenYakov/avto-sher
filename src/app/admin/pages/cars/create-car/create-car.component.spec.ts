import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CarTariff, Fuel, RequestStatus, Transmission } from '@constants';
import { CarCard } from '@models';
import { CarService } from '@services';
import { AutoparkFacade } from '@store';
import { ConfirmationService } from 'primeng/api';
import { of } from 'rxjs';

import { CreateCarComponent } from './create-car.component';

const mockCarCardData: CarCard = {
  id: 12345,
  fuel: Fuel.GAS,
  type: CarTariff.COMFORT,
  enginePower: 1500,
  status: RequestStatus.AVAILABLE,
  createdAt: new Date('2023-01-15T12:00:00Z'),
  additionalInfo: ['Additional info 1', 'Additional info 2'],
  financialInfo: ['Financial info 1', 'Financial info 2'],
  yearOfRelease: 2018,
  photos: ['/path/to/photo1.jpg', '/path/to/photo2.jpg'],
  price: 500,
  transmission: Transmission.AUTOMATIC,
  model: 'Toyota Camry',
  brand: 'Toyota',
  rentSchedule: 'Daily',
  minRentPeriod: '24 hours',
  rentalConditions: ['Condition 1', 'Condition 2'],
  carStateNumber: 'ABC123',
  VIN: 'WVWZZZAZZAZ123456',
  STS: 'STS1234567890123456',
  autopark: {
    id: 67890,
    title: 'Autopark Name',
    region: 'City Region',
    address: 'Street Address 123',
    bonuses: [],
    phoneNumber: '+380123456789',
    autoparkOwner: {
      avatar: '/path/to/avatar.jpg',
      fullName: 'John Doe',
    },
  },
};

describe('CreateCarComponent', () => {
  let component: CreateCarComponent;
  let fixture: ComponentFixture<CreateCarComponent>;
  let carService: jasmine.SpyObj<CarService>;
  let autoparkFacade: jasmine.SpyObj<AutoparkFacade>;
  let confirmationService: jasmine.SpyObj<ConfirmationService>;
  let router: jasmine.SpyObj<Router>;
  let activeRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    const carServiceSpy = jasmine.createSpyObj('CarService', [
      'getCarProfile',
      'createCar',
      'updateCar',
      'deleteCar',
      'addCarImages',
      'deleteCarImage',
    ]);
    const autoparkFacadeSpy = jasmine.createSpyObj('AutoparkFacade', [], { activeAutopark$: of(null) });
    const confirmationServiceSpy = jasmine.createSpyObj('ConfirmationService', ['confirm']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const activeRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], { params: of({ id: 1 }) });

    await TestBed.configureTestingModule({
      imports: [CreateCarComponent, ReactiveFormsModule],
      providers: [
        { provide: CarService, useValue: carServiceSpy },
        { provide: AutoparkFacade, useValue: autoparkFacadeSpy },
        { provide: ConfirmationService, useValue: confirmationServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activeRouteSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCarComponent);
    component = fixture.componentInstance;
    carService = TestBed.inject(CarService) as jasmine.SpyObj<CarService>;
    autoparkFacade = TestBed.inject(AutoparkFacade) as jasmine.SpyObj<AutoparkFacade>;
    confirmationService = TestBed.inject(ConfirmationService) as jasmine.SpyObj<ConfirmationService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    activeRoute = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form on init', fakeAsync(() => {
    carService.getCarProfile.and.returnValue(of(mockCarCardData));

    spyOn<CreateCarComponent, any>(component, 'fillForm').and.callThrough();

    component.ngOnInit();
    tick(500);
    expect(component['fillForm']).toHaveBeenCalled();
  }));

  it('should enable buyPriceControl when enableBuyCar is true', fakeAsync(() => {
    component.enableBuyCar.set(true);
    tick(200);
    expect(component.buyPriceControl.enabled).toBeTrue();
  }));

  it('should disable buyPriceControl when enableBuyCar is false', fakeAsync(() => {
    component.enableBuyCar.set(false);
    tick(200);
    expect(component.buyPriceControl.disabled).toBeTrue();
  }));

  it('should call carService.createCar on submit if not in edit mode', () => {
    component.editMode.set(false);
    carService.createCar.and.returnValue(of(mockCarCardData));
    carService.updateCar.and.returnValue(of(mockCarCardData));
    component.onSubmit();
    expect(carService.createCar).toHaveBeenCalled();
  });

  it('should call carService.updateCar on submit if in edit mode', () => {
    component.editMode.set(true);
    carService.createCar.and.returnValue(of(mockCarCardData));
    carService.updateCar.and.returnValue(of(mockCarCardData));
    component.carForm.patchValue({ id: 1 });
    component.onSubmit();
    expect(carService.updateCar).toHaveBeenCalledWith(1, jasmine.any(Object));
  });
});
