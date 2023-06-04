import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { environment } from '@environments/environment';
import { AuthResponse, LoginDto, RegisterDto } from '@pages';
import { BaseService } from '../helpers';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService extends BaseService {

  public login(loginDto: LoginDto): Observable<AuthResponse> {
    return this.httpService.post<AuthResponse>( `${ environment.apiUrl }/auth/sign-in`, loginDto, { withCredentials: true } );
  }

  public registration(registerDto: RegisterDto): Observable<AuthResponse> {
    return this.httpService.post<AuthResponse>( `${ environment.apiUrl }/auth/sign-up`, registerDto, { withCredentials: true } );
  }

  public logout(): void {
    this.httpService.post( `${ environment.apiUrl }/auth/logout`, {}, { withCredentials: true } );
  }

  public accessTokenStatus(): Observable<any> {
    return this.httpService.get( `${ environment.apiUrl }/auth/access-status` );
  }

  public refreshToken(): Observable<AuthResponse> {
    return this.httpService.post<any>( `${ environment.apiUrl }/auth/refresh`, {}, { withCredentials: true } );
  }
}
