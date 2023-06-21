import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AuctionAutoparks, AutoparkBonus, AutoparkDetailed, Region } from '@models';

import { BaseService } from '../helpers';

@Injectable( {
  providedIn: 'root'
} )
export class AutoparkService extends BaseService {

  public getAuctionAutoparksByRegion(regionName: string): Observable<AuctionAutoparks> {
    return this.httpService.get<AuctionAutoparks>( `${ environment.apiUrl }/autoparks/auction`, { params: { region: regionName } } )
  }

  public getAutoparksRegions(): Observable<Region[]> {
    return this.httpService.get<Region[]>( `${ environment.apiUrl }/autoparks/regions` )
  }

  public getAutoparkById(autoparkId: number): Observable<AutoparkDetailed> {
    return this.httpService.get<any>( `${ environment.apiUrl }/autoparks/${ autoparkId }` ).pipe(
      map( (response) => {
        return {
          ...response.autopark,
          isFavorite: false,
          ordersCount: 0,
          bonuses: response.bonuses
        }
      } )
    )
  }

}
