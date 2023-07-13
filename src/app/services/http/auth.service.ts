import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AuthResponse, LoginDto, RegisterDto, RegisterOwner } from '@pages';

import { BaseService } from '../helpers';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService extends BaseService {

  public login(loginDto: LoginDto): Observable<AuthResponse> {
    return this.httpService.post<AuthResponse>( `${ environment.apiUrl }/auth/sign-in`, loginDto, { withCredentials: true } );
  }

  public registration(registerDto: RegisterDto): Observable<AuthResponse> {
    if (registerDto.role === 'owner') {
      const owner: RegisterOwner = {
        email: registerDto.email,
        fullName: registerDto.fullName,
        role: registerDto.role,
        password: registerDto.password
      }
      return this.httpService.post<AuthResponse>( `${ environment.apiUrl }/auth/sign-up`, owner, { withCredentials: true } );
    }
    return this.httpService.post<AuthResponse>( `${ environment.apiUrl }/auth/sign-up`, registerDto, { withCredentials: true } );
  }

  public logout(): Observable<any> {
    return this.httpService.post( `${ environment.apiUrl }/auth/logout`, {}, { withCredentials: true } );
  }

  public refreshToken(): Observable<AuthResponse> {
    return this.httpService.post<any>( `${ environment.apiUrl }/auth/refresh`, {}, { withCredentials: true } );
  }

}
