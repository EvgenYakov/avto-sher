import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { AutoparkBonus, ICreateBonus, ICreateCustomBonus, IDeleteBonus } from '@models';
import { BaseService } from '@services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BonusesService extends BaseService<AutoparkBonus> {
  readonly apiPrefix = `autopark-bonuses`;

  constructor(private httpService: HttpClient) {
    super(httpService);
  }

  getDefaultBonuses(): Observable<AutoparkBonus[]> {
    return this.httpService.get<AutoparkBonus[]>(`${environment.apiUrl}/autopark-bonuses/default`);
  }

  deleteBonus(bonus: IDeleteBonus): Observable<void> {
    return this.httpService.request<void>('DELETE', `${environment.apiUrl}/autopark-bonuses/default`, { body: bonus });
  }

  addCustomBonus(bonus: ICreateCustomBonus): Observable<AutoparkBonus> {
    return this.httpService.post<AutoparkBonus>(`${environment.apiUrl}/autopark-bonuses/custom`, bonus);
  }

  addDefaultBonus(bonus: ICreateBonus): Observable<AutoparkBonus> {
    return this.create(bonus);
  }
}
