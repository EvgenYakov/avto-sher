import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { BaseService } from '../helpers';
import { AuthResponse, LoginDto, RegisterDto } from '../../pages/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  public login(loginDto: LoginDto): Observable<AuthResponse> {
    console.log(loginDto)
    return this.httpService.post<AuthResponse>(`${ environment.apiUrl }/auth/signIn`, loginDto, { withCredentials: true });
  }

  public registration(registerDto: RegisterDto): Observable<AuthResponse> {
    return this.httpService.post<AuthResponse>(`${ environment.apiUrl }/auth/signUp`, registerDto, { withCredentials: true });
  }

  public logout(): void {
    this.httpService.post(`${ environment.apiUrl }/auth/logout`, {}, { withCredentials: true });
  }

  public refreshToken(): Observable<AuthResponse> {
    return this.httpService.post<any>(`${ environment.apiUrl }/auth/refresh`, {}, { withCredentials: true });
  }
}
