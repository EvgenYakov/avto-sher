import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AuctionAutoparks, AutoparkBonus, AutoparkCard, AutoparkDetailed, PaginationResponse, Region } from '@models';

import { BaseService } from '../helpers';

@Injectable( {
  providedIn: 'root'
} )
export class AutoparkService extends BaseService {

  private readonly apiUrl = `${ environment.apiUrl }/autoparks`;

  public getAuctionAutoparksByRegion(regionName: string): Observable<AuctionAutoparks> {
    return this.httpService.get<AuctionAutoparks>( `${ this.apiUrl }/auction`, { params: { region: regionName } } )
  }

  public getAutoparksList(page: number, limit: number, regionName: string): Observable<PaginationResponse<AutoparkCard[]>> {
    return this.httpService.get<PaginationResponse<AutoparkCard[]>>( this.apiUrl, {
      params: {
        page,
        limit,
        region: regionName
      }
    } )
  }

  public getRegions(): Observable<Region[]> {
    return this.httpService.get<Region[]>( `${ this.apiUrl }/regions` )
  }

  public getAutoparkById(autoparkId: number): Observable<AutoparkDetailed> {
    return this.httpService.get<any>( `${ this.apiUrl }/${ autoparkId }` ).pipe(
      map( (response) => {
        return {
          ...response,
          isFavorite: false,
          ordersCount: 0,
        }
      } )
    )
  }

  public getDefaultBonuses(): Observable<AutoparkBonus[]> {
    return this.httpService.get<AutoparkBonus[]>( `${ environment.apiUrl }/autopark-bonuses/default` );
  }

}
