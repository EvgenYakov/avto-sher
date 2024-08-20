import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { environment } from '@environments/environment';
import { ICreatePersonalDto, UserProfile } from '@models';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  constructor(private httpService: HttpClient) {}

  readonly personalList = signal<UserProfile[]>([]);

  private readonly apiUrl = `${environment.apiUrl}/autoparks`;

  getAutoparkOperators(parkId: number): Observable<UserProfile[]> {
    // TODO: REWORK
    return this.httpService.get<UserProfile[]>(`${this.apiUrl}/operators/${parkId}`).pipe(
      tap(res => {
        this.personalList.set(res);
      })
    );
  }

  addOperator(registerDto: ICreatePersonalDto): Observable<UserProfile> {
    return this.httpService.post<UserProfile>(
      `${this.apiUrl}/auto-park-operator/${registerDto.autoParkId}`,
      registerDto,
      {
        withCredentials: true,
      }
    );
  }

  deleteOperator(id: number): Observable<void> {
    return this.httpService.delete<void>(`${this.apiUrl}/operator/${id}`);
  }
}
