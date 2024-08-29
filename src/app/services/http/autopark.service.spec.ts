import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '@environments/environment';
import { AutoparkCard, AutoparkDetailed } from '@models';

import { MockBonusesService } from '../helpers/mock-bonuses.service';

import { AutoparkService } from './autopark.service';

describe('AutoparkService', () => {
  let service: AutoparkService;
  let httpMock: HttpTestingController;
  let mockBonusesService: jasmine.SpyObj<MockBonusesService>;

  beforeEach(() => {
    const mockBonusesServiceSpy = jasmine.createSpyObj('MockBonusesService', ['getRandomBonuses']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: environment,
          useValue: {
            apiUrl: 'https://avtosherapi.ru',
          },
        },
        { provide: MockBonusesService, useValue: mockBonusesServiceSpy },
        AutoparkService,
      ],
    });

    service = TestBed.inject(AutoparkService);
    httpMock = TestBed.inject(HttpTestingController);
    mockBonusesService = TestBed.inject(MockBonusesService) as jasmine.SpyObj<MockBonusesService>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch auction autoparks by region', () => {
    const regionName = 'TestRegion';
    service.getAuctionAutoparksByRegion(regionName).subscribe(data => {
      expect(data).toBeDefined();
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/autoparks/auction?region=${regionName}`);
    expect(req.request.method).toBe('GET');
    req.flush({}); // Respond with dummy data
  });

  it('should fetch autoparks list', () => {
    const page = 1;
    const limit = 10;
    const regionName = 'TestRegion';
    service.getAutoparksList(page, limit, regionName).subscribe(data => {
      expect(data).toBeDefined();
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/autoparks?page=${page}&limit=${limit}&region=${regionName}`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });
  it('should fetch autopark by id', () => {
    const autoparkId = 1;
    mockBonusesService.getRandomBonuses.and.returnValue([]);

    const expectedData: AutoparkDetailed = {
      id: 1,
      title: 'Test Autopark',
      logo: 'https://example.com/logo.png',
      rating: 4.2,
      isPremium: true,
      region: 'Europe',
      carsCount: 10,
      isFavorite: false,
      ordersCount: 22,
      description: 'This is a test autopark.',
      backgroundImage: 'https://example.com/background.png',
      createdAt: new Date(),
      address: '123 Main St',
      phoneNumber: '+1234567890',
      rentalConditions: ['Condition 1', 'Condition 2'],
      rentSchedule: 'Monday to Friday',
      minRentPeriod: '1 day',
      bonuses: [],
    };

    service.getAutoparkById(autoparkId).subscribe(data => {
      expect(data).toBeDefined();

      expect(data.id).toBe(expectedData.id);
      expect(data.title).toBe(expectedData.title);
      expect(data.logo).toBe(expectedData.logo);
      expect(data.rating).toBe(expectedData.rating);
      expect(data.isPremium).toBe(expectedData.isPremium);
      expect(data.region).toBe(expectedData.region);
      expect(data.carsCount).toBe(expectedData.carsCount);
      expect(data.isFavorite).toBe(expectedData.isFavorite);
      expect(typeof data.ordersCount).toBe('number');
      expect(data.description).toBe(expectedData.description);
      expect(data.backgroundImage).toBe(expectedData.backgroundImage);
      expect(data.createdAt).toBeInstanceOf(Date);
      expect(data.address).toBe(expectedData.address);
      expect(data.phoneNumber).toBe(expectedData.phoneNumber);
      expect(data.rentalConditions).toEqual(expectedData.rentalConditions);
      expect(data.rentSchedule).toBe(expectedData.rentSchedule);
      expect(data.minRentPeriod).toBe(expectedData.minRentPeriod);
      expect(data.bonuses).toEqual(expectedData.bonuses);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/autoparks/${autoparkId}`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedData);
  });
});
