import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserRole } from '@constants';
import { environment } from '@environments/environment';
import { LoginDto } from '@pages';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });

    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unmatched requests are outstanding.
  });
  it('should perform a POST request to /auth/sign-in on login', () => {
    const loginDto: LoginDto = { email: 'test@test.com', password: 'testtest11' };
    const expectedUrl = `${environment.apiUrl}/auth/sign-in`;

    authService.login(loginDto).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    req.flush({
      accessToken: 'test',
      role: UserRole.DRIVER,
    });
  });

  it('should handle error during login', () => {
    const loginDto = { email: 'test@test.com', password: 'testtest11' };

    authService.login(loginDto).subscribe(
      () => fail('Expected an error'),
      error => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpMock.expectOne(`${environment.apiUrl}/auth/sign-in`);
    req.flush('Неверный пароль.', { status: 400, statusText: 'Server Error' });
  });
});
