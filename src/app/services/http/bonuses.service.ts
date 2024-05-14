import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { AutoparkBonus, ICreateBonus, ICreateCustomBonus, IDeleteBonus } from '@models';
import { BaseService } from '@services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BonusesService extends BaseService {
  private readonly apiUrl = `${environment.apiUrl}/autopark-bonuses`;

  getDefaultBonuses(): Observable<AutoparkBonus[]> {
    return this.httpService.get<AutoparkBonus[]>(`${environment.apiUrl}/autopark-bonuses/default`);
  }

  deleteBonus(bonus: IDeleteBonus): Observable<void> {
    return this.httpService.request<void>('DELETE', `${environment.apiUrl}/autopark-bonuses/default`, { body: bonus });
  }

  addCustomBonus(bonus: ICreateCustomBonus): Observable<AutoparkBonus> {
    return this.httpService.post<AutoparkBonus>(`${environment.apiUrl}/autopark-bonuses/custom`, bonus);
  }

  addDefaultBonus(bonus: ICreateBonus): Observable<void> {
    return this.httpService.post<void>(`${environment.apiUrl}/autopark-bonuses`, bonus);
  }
}
