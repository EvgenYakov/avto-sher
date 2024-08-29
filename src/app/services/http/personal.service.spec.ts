import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '@environments/environment';
import { ICreatePersonalDto, UserProfile } from '@models';
import { IRegisterDto } from '@pages';

import { PersonalService } from './personal.service';

const mockUserProfile: UserProfile = {
  id: 12345,
  fullName: 'John Doe',
  phoneNumber: '+1 555 123 4567',
  email: 'john.doe@example.com',
  avatar: 'https://example.com/john-doe-avatar.jpg',
  info: 'Senior Software Engineer',
  role: 'Admin',
  requestsCounter: 25,
  ordersCounter: 17,
  reviewsAboutUserCounter: 12,
  reviewsByUserCounter: 8,
  favoriteCarsCounter: 5,
  favoriteAutoparksCounter: 3,
};

const mockRegisterDto: IRegisterDto = {
  id: undefined,
  fullName: 'Jane Smith',
  email: 'jane.smith@example.com',
  phoneNumber: '+1 555 789 0123',
  password: 'StrongP@ssw0rd!',
  role: 'User',
};

describe('PersonalService', () => {
  let service: PersonalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PersonalService,
        {
          provide: 'environment',
          useValue: { apiUrl: 'http://api.example.com' },
        },
      ],
    });

    service = TestBed.inject(PersonalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getAutoparkOperators', () => {
    it('should fetch operators for a park', () => {
      const parkId = 123;
      const expectedUrl = `${environment.apiUrl}/autoparks/operators/${parkId}`;
      const mockResponse: UserProfile[] = [mockUserProfile];

      service.getAutoparkOperators(parkId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(expectedUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);

      // Verify that personalList signal is set
      expect(service.personalList()).toEqual(mockResponse);
    });
  });

  describe('addOperator', () => {
    it('should add a new operator', () => {
      const autoParkId = 456;
      const registerDto: ICreatePersonalDto = {
        ...mockRegisterDto,
        autoParkId,
      };
      const expectedUrl = `${environment.apiUrl}/autoparks/auto-park-operator/${registerDto.autoParkId}`;
      const mockResponse: UserProfile = mockUserProfile;

      service.addOperator(registerDto).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(expectedUrl);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(registerDto);
      req.flush(mockResponse);
    });
  });

  describe('deleteOperator', () => {
    it('should delete an operator', () => {
      const id = 123;
      const expectedUrl = `${environment.apiUrl}/autoparks/operator/${id}`;

      service.deleteOperator(id).subscribe(() => {
        expect(true).toBeTruthy();
      });

      const req = httpMock.expectOne(expectedUrl);
      expect(req.request.method).toBe('DELETE');
      req.flush(null);
    });
  });
});
