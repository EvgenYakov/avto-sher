import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { Region, UserProfile } from '@models';
import { RegisterDto, RegisterOwner } from '@pages';
import { BaseService } from '@services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonalService extends BaseService {
  private readonly apiUrl = `${environment.apiUrl}/autoparks`;

  public getAutoparkOperators(parkId: number): Observable<UserProfile[]> {
    return this.httpService.get<UserProfile[]>(`${this.apiUrl}/operators/${parkId}`);
  }

  public addOperator(registerDto: RegisterDto): Observable<UserProfile> {
    const owner: RegisterOwner = {
      email: registerDto.email,
      fullName: registerDto.fullName,
      role: registerDto.role,
      password: registerDto.password,
    };
    return this.httpService.post<UserProfile>(`${environment.apiUrl}/auth/sign-up`, owner, {
      withCredentials: true,
    });
  }
}
