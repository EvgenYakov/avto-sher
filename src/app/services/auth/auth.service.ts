import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { AuthResponse, LoginDto, RegisterDto } from '@pages';
import { UserProfile } from '@models';

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

  public refreshToken(): Observable<AuthResponse> {
    return this.httpService.post<any>( `${ environment.apiUrl }/auth/refresh`, {}, { withCredentials: true } );
  }

  public getMe(): Observable<UserProfile> {
    return this.httpService.get<any>( `${ environment.apiUrl }/users/me` ).pipe(
      map( (response: UserProfile) => {
        return <UserProfile>{
          ...response,
          avatar: response.avatar + '?' + new Date().getTime(),
          requestsCounter: 4,
          ordersCounter: 10,
          reviewsAboutUserCounter: 7,
          reviewsByUserCounter: 10,
          favoriteCarsCounter: 5,
          favoriteAutoparksCounter: 2,
        };
      } )
    );
  }
}
