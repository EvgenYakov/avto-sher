import { HttpClient } from '@angular/common/http';
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
import { MockBonusesService } from '../helpers/mock-bonuses.service';

@Injectable({
  providedIn: 'root',
})
export class AutoparkService extends BaseService<AutoparkCard> {
  readonly apiPrefix = 'autoparks';

  constructor(
    private mockBonusesService: MockBonusesService,
    private httpService: HttpClient
  ) {
    super(httpService);
  }

  public getAuctionAutoparksByRegion(regionName: string): Observable<AuctionAutoparks> {
    return this.httpService.get<AuctionAutoparks>(`${this.url}/auction`, { params: { region: regionName } });
  }

  public getAutoparksList(
    page: number,
    limit: number,
    regionName: string
  ): Observable<PaginationResponse<AutoparkCard[]>> {
    return this.getList({
      page,
      limit,
      regionName,
    });
  }

  public getRegions(): Observable<Region[]> {
    return this.httpService.get<Region[]>(`${this.url}/regions`);
  }

  public getAutoparkById(autoparkId: number): Observable<AutoparkDetailed> {
    return this.httpService.get<any>(`${this.url}/${autoparkId}`).pipe(
      map(response => {
        return {
          ...response,
          isFavorite: false,
          ordersCount: Math.floor(Math.random() * (500 - 10 + 1)) + 10,
          rating: 4.2,
          bonuses: this.mockBonusesService.getRandomBonuses(),
        };
      })
    );
  }

  public getAutoparksByOwner(ownerId: number): Observable<AutoparkDetailed[]> {
    return this.httpService.get<any[]>(`${this.url}/owner/${ownerId}`);
  }

  public createAutopark(autopark: CreateAutopark): Observable<AutoparkDetailed> {
    const formData = new FormData();
    formData.append('logo', autopark.logo);
    formData.append('title', autopark.title);
    formData.append('description', autopark.description);
    formData.append('region', autopark.region);
    formData.append('address', autopark.address);
    formData.append('phoneNumber', autopark.phoneNumber);

    return this.httpService.post<AutoparkDetailed>(`${this.url}`, formData, { withCredentials: true });
  }

  public updateAutopark(id: number, autopark: IUpdateAutopark): Observable<AutoparkDetailed> {
    return this.httpService.put<AutoparkDetailed>(`${this.url}/${id}`, autopark, { withCredentials: true });
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
    }>(`${this.url}/logo/${autoparkId}`, formData, { withCredentials: true });
  }

  public getDefaultBonuses(): Observable<AutoparkBonus[]> {
    return this.httpService.get<AutoparkBonus[]>(`${environment.apiUrl}/autopark-bonuses/default`);
  }
}
