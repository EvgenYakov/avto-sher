import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { ICreatePersonalDto, UserProfile } from '@models';
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

  public addOperator(registerDto: ICreatePersonalDto): Observable<UserProfile> {
    return this.httpService.post<UserProfile>(
      `${this.apiUrl}/auto-park-operator/${registerDto.autoParkId}`,
      registerDto,
      {
        withCredentials: true,
      }
    );
  }
}
