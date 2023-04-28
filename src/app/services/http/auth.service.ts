import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AuthResponse } from '@models';
import { BaseService } from './base.service';
import { LoginDto } from '../../modules/auth/models/login-form.interface';
import { RegisterDto } from '../../modules/auth/models/registration-form.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  public login(loginDto: LoginDto): Observable<AuthResponse> {
    console.log(loginDto)
    return this.httpService.post<AuthResponse>(`${ environment.apiUrl }/auth/signIn`, loginDto, { withCredentials: true });
  }

  public registration(registerDto: RegisterDto): Observable<AuthResponse> {
    console.log(registerDto)
    return this.httpService.post<AuthResponse>(`${ environment.apiUrl }/auth/signUp`, registerDto, { withCredentials: true });
  }

  public logout(): void {
    this.httpService.post(`${ environment.apiUrl }/auth/logout`, {}, { withCredentials: true });
  }

  public refreshToken(): Observable<string> {
    return this.httpService.post<any>(`${ environment.apiUrl }/auth/refresh-token`, {}, { withCredentials: true });
  }
}
