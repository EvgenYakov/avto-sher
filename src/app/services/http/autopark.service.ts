import { Injectable } from '@angular/core';

import { map, Observable, timer } from 'rxjs';

import { BaseService } from '../helpers';

import { AuctionAutoparks, AutoCard, AutoparkCard, AutoparkDetailed, Region, ReviewUser } from '@models';
import { autoparkDetailedData, carsData, reviewsUserData, topAutoparksCards } from '@test-data';
import { environment } from '@environments/environment';
import { HttpParams } from '@angular/common/http';

export interface AutoparkDetailedResponse {
  autoparkDetailed: AutoparkDetailed,
  cars: AutoCard[],
  reviews: ReviewUser[]
}

@Injectable( {
  providedIn: 'root'
} )
export class AutoparkService extends BaseService {
  public getAutoparks(): Observable<AutoparkCard[]> {
    return timer( 1000 ).pipe(
      map( () => topAutoparksCards )
    )
  }

  public getAuctionAutoparksByRegion(regionName: string): Observable<AuctionAutoparks> {
    const params = new HttpParams();
    params.append('region', regionName);

    return this.httpService.get<AuctionAutoparks>( `${ environment.apiUrl }/autoparks/auction`, {params} )
  }

  public getAutoparksRegions(): Observable<Region[]> {
    return this.httpService.get<Region[]>( `${ environment.apiUrl }/autoparks/regions` );
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
