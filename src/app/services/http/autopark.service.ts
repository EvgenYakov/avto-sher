import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import {
  AuctionAutoparks,
  AutoparkBonus,
  AutoparkCard,
  AutoparkDetailed,
  CreateAutopark,
  IUpdateAutopark,
  PaginationResponse,
  Region,
} from '@models';
import { map, Observable } from 'rxjs';

import { BaseService } from '../helpers';

@Injectable({
  providedIn: 'root',
})
export class AutoparkService extends BaseService {
  private readonly apiUrl = `${environment.apiUrl}/autoparks`;

  public getAuctionAutoparksByRegion(regionName: string): Observable<AuctionAutoparks> {
    return this.httpService.get<AuctionAutoparks>(`${this.apiUrl}/auction`, { params: { region: regionName } });
  }

  public getAutoparksList(
    page: number,
    limit: number,
    regionName: string
  ): Observable<PaginationResponse<AutoparkCard[]>> {
    console.log(this.apiUrl);
    return this.httpService.get<PaginationResponse<AutoparkCard[]>>(this.apiUrl, {
      params: {
        page,
        limit,
        region: regionName,
      },
    });
  }

  public getRegions(): Observable<Region[]> {
    return this.httpService.get<Region[]>(`${this.apiUrl}/regions`);
  }

  public getAutoparkById(autoparkId: number): Observable<AutoparkDetailed> {
    return this.httpService.get<any>(`${this.apiUrl}/${autoparkId}`).pipe(
      map(response => {
        return {
          ...response,
          isFavorite: false,
          ordersCount: 0,
        };
      })
    );
  }

  public getAutoparksByOwner(ownerId: number): Observable<AutoparkDetailed[]> {
    return this.httpService.get<any[]>(`${this.apiUrl}/owner/${ownerId}`);
  }

  public createAutopark(autopark: CreateAutopark): Observable<AutoparkDetailed> {
    const formData = new FormData();
    formData.append('logo', autopark.logo);
    formData.append('title', autopark.title);
    formData.append('description', autopark.description);
    formData.append('region', autopark.region);
    formData.append('address', autopark.address);

    return this.httpService.post<AutoparkDetailed>(`${this.apiUrl}`, formData, { withCredentials: true });
  }

  public updateAutopark(id: number, autopark: IUpdateAutopark): Observable<AutoparkDetailed> {
    return this.httpService.put<AutoparkDetailed>(`${this.apiUrl}/${id}`, autopark, { withCredentials: true });
  }

  public updateAutoparkLogo(
    file: File,
    autoparkId: number
  ): Observable<{
    url: string;
  }> {
    const formData = new FormData();
    formData.append('image', file);

    return this.httpService.patch<{
      url: string;
    }>(`${this.apiUrl}/logo/${autoparkId}`, formData, { withCredentials: true });
  }

  public getDefaultBonuses(): Observable<AutoparkBonus[]> {
    return this.httpService.get<AutoparkBonus[]>(`${environment.apiUrl}/autopark-bonuses/default`);
  }
}
