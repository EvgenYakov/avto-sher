import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { map, Observable, timer } from 'rxjs';

import { environment } from '@environments/environment';
import { AuctionAutoparks, AutoCard, AutoparkDetailed, Region, ReviewUser } from '@models';
import { autoparkDetailedData, carsData, reviewsUserData } from '@test-data';

import { BaseService } from '../helpers';

export interface AutoparkDetailedResponse {
  autoparkDetailed: AutoparkDetailed,
  cars: AutoCard[],
  reviews: ReviewUser[]
}

@Injectable( {
  providedIn: 'root'
} )
export class AutoparkService extends BaseService {

  public getAuctionAutoparksByRegion(regionName: string): Observable<AuctionAutoparks> {
    const params = new HttpParams();
    params.append( 'region', regionName );

    return this.httpService.get<AuctionAutoparks>( `${ environment.apiUrl }/autoparks/auction`, { params } )
  }

  public getAutoparksRegions(): Observable<Region[]> {
    return this.httpService.get<Region[]>( `${ environment.apiUrl }/autoparks/regions` )
  }

  public getAutoparkById(autoparkId: number): Observable<AutoparkDetailedResponse> {
    return timer( 500 ).pipe(
      map( () => {
        return {
          autoparkDetailed: autoparkDetailedData,
          cars: carsData,
          reviews: reviewsUserData
        };
      } )
    );
  }

}
