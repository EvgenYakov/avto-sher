import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CarFilterParams } from '@components';
import { CarTariff, Fuel, Transmission } from '@constants';
import { environment } from '@environments/environment';
import { CarCard, CreateCar, OrderHistoryCarCard, PaginationResponse } from '@models';
import { BaseService } from '@services';
import { of } from 'rxjs';

import { MockBonusesService } from '../helpers/mock-bonuses.service';

import { CarService } from './car.service';

const carData: CreateCar = {
  additionalInfo: [],
  autoparkId: 0,
  brand: '',
  enginePower: 0,
  financialInfo: [],
  fuel: Fuel.GAS,
  minRentPeriod: 0,
  model: '',
  price: 0,
  rentSchedule: '',
  rentalConditions: [],
  transmission: Transmission.AUTOMATIC,
  type: CarTariff.COMFORT,
  yearOfRelease: 0,
};

describe('CarService', () => {
  let service: CarService;
  let httpMock: HttpTestingController;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let baseService: BaseService<CarCard>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['delete', 'get', 'post']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarService, { provide: MockBonusesService, useClass: MockBonusesService }],
    });

    service = TestBed.inject(CarService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getAllCars', () => {
    it('should fetch all cars with correct parameters', () => {
      const region = 'US';
      const page = 1;
      const limit = 10;
      const mockResponse: PaginationResponse<CarCard[]> = { data: [], metadata: { pagesLeft: 0 } };

      httpClientSpy.get.and.returnValue(of(mockResponse));

      const allRequests = httpMock.match(() => true);
      service.getAllCars(region, page, limit).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/cars?page=1&limit=10&region=US`);

      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('getOrderHistoryCars', () => {
    it('should fetch order history cars with correct parameters', () => {
      const page = 1;
      const limit = 5;
      const mockResponse: OrderHistoryCarCard[] = [];

      httpClientSpy.get.and.returnValue(of(mockResponse));

      service.getOrderHistoryCars(page, limit).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/cars?page=${page}&limit=${limit}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('getCarsByFilter', () => {
    it('should fetch cars by filter with correct parameters', () => {
      const filterParams: CarFilterParams = {
        startPrice: 0,
        endPrice: 1,
        type: [],
        brand: '',
        model: '',
        fuel: [],
        transmission: [],
        additionalInfo: [],
        financialInfo: [],
        minRentPeriod: 1,
        rentSchedule: [],
      };
      const region = 'US';
      const page = 1;
      const limit = 10;
      const mockResponse: PaginationResponse<CarCard[]> = { data: [], metadata: { pagesLeft: 0 } };

      httpClientSpy.post.and.returnValue(of(mockResponse));

      service.getCarsByFilter(filterParams, region, page, limit).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/cars/filter?page=${page}&limit=${limit}&region=${region}`);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(filterParams);
      req.flush(mockResponse);
    });
  });

  describe('getAutoparkCars', () => {
    it('should call httpService.get with correct parameters for getAutoparkCars', () => {
      service.getAutoparkCars(12345, 1).subscribe();

      // expect(httpClient.get.calls.count()).withContext('one call').toBe(1);
      expect(httpMock.expectOne(`${environment.apiUrl}/cars/autopark/12345?page=1&limit=5`)).toBeTruthy();
    });
  });

  // Test getCarProfile
  describe('getCarProfile', () => {
    it('should call httpService.get and transform response', () => {
      const carId = 67890;
      service.getCarProfile(carId).subscribe();

      expect(httpMock.expectOne(`https://avtosherapi.ru/cars/67890`)).toBeTruthy();
    });
  });

  // Test getCarsBrands
  describe('getCarsBrands', () => {
    it('should call httpService.get with correct parameters for getCarsBrands', () => {
      const regionName = 'some-region';
      service.getCarsBrands(regionName).subscribe();

      const req = httpMock.expectOne(`${environment.apiUrl}/cars/brands/used?region=${regionName}`);

      expect(req.request.method).toBe('GET');
      expect(req.request.url).toBe(`${environment.apiUrl}/cars/brands/used`);

      req.flush({ brands: ['Brand1', 'Brand2'] });
    });
  });
  // Test getModelsByBrand
  describe('getModelsByBrand', () => {
    it('should call httpService.get with correct parameters for getModelsByBrand', () => {
      service.getModelsByBrand('regionName', 'brandName').subscribe();

      const req = httpMock.expectOne(`${environment.apiUrl}/cars/models/used?brand=brandName&region=regionName`);

      expect(req.request.method).toBe('GET');
      expect(req.request.url).toBe(`${environment.apiUrl}/cars/models/used`);
    });
  });

  // Test createCar
  it('should call create method of BaseService', () => {
    service.createCar(carData).subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/cars`);

    expect(req.request.method).toBe('POST');
    expect(req.request.url).toBe(`${environment.apiUrl}/cars`);
  });

  // Test updateCar
  describe('updateCar', () => {
    it('should call httpService.put with correct parameters', () => {
      const carId = 12345;

      service.updateCar(carId, carData).subscribe();

      const req = httpMock.expectOne(`${environment.apiUrl}/cars/${carId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.url).toBe(`${environment.apiUrl}/cars/${carId}`);
    });
  });

  describe('deleteCar', () => {
    it('should call httpService.delete with correct parameters', () => {
      const carId = 12345;
      service.deleteCar(carId).subscribe();

      const req = httpMock.expectOne(`${environment.apiUrl}/cars/${carId}`);

      expect(req.request.method).toBe('DELETE');
      expect(req.request.url).toBe(`${environment.apiUrl}/cars/${carId}`);
    });
  });

  describe('deleteCarImage', () => {
    it('should call httpClient.delete with correct parameters', () => {
      const carId = 12345;
      const imageUrl = 'image-url.jpg';

      service.deleteCarImage(carId, imageUrl).subscribe();

      const req = httpMock.expectOne(`${environment.apiUrl}/cars/images/${carId}`);
      expect(req.request.method).toBe('DELETE');
      expect(req.request.body).toEqual({ imageUrls: [imageUrl] });
      req.flush('');
    });
  });

  // // Test addCarImages
  // describe('addCarImages', () => {
  //   it('should call httpService.patch with FormData and correct headers', () => {
  //     const carId = 12345;
  //     const formData = new FormData();
  //     formData.append('files' /* mock file */);
  //
  //     service.addCarImages(carId, formData);
  //
  //     expect(httpMock.expectOne(`${environment.apiUrl}/cars/images/${carId}`).patch()).toBeTruthy();
  //     expect(
  //       httpMock.expectOne(`${environment.apiUrl}/cars/images/${carId}`).requestBody instanceof FormData
  //     ).toBeTruthy();
  //     expect(httpMock.expectOne(`${environment.apiUrl}/cars/images/${carId}`).requestOptions.withCredentials).toBe(
  //       true
  //     );
  //   });
  // });
});
