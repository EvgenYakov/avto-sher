import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AuctionAutoparks, AutoparkCard, AutoparkDetailed, Region } from '@models';

import { BaseService } from '../helpers';

@Injectable( {
  providedIn: 'root'
} )
export class AutoparkService extends BaseService {

  public getAuctionAutoparksByRegion(regionName: string): Observable<AuctionAutoparks> {
    return this.httpService.get<AuctionAutoparks>( `${ environment.apiUrl }/autoparks/auction`, { params: { region: regionName } } )
  }

  public getAutoparksList(regionName: string): Observable<AutoparkCard[]> {
    return this.httpService.get<AutoparkCard[]>( `${ environment.apiUrl }/autoparks`, {
      params: {
        page: 1,
        limit: 20,
        region: regionName
      }
    } )
  }

  public getRegions(): Observable<Region[]> {
    return this.httpService.get<Region[]>( `${ environment.apiUrl }/autoparks/regions` )
  }

  public getAutoparkById(autoparkId: number): Observable<AutoparkDetailed> {
    return this.httpService.get<any>( `${ environment.apiUrl }/autoparks/${ autoparkId }` ).pipe(
      map( (response) => {
        return {
          ...response,
          isFavorite: false,
          ordersCount: 0,
        }
      } )
    )
  }

}
