import { Injectable } from '@angular/core';

import { map, Observable, of, timer } from 'rxjs';

import { BaseService } from '../helpers';

import { AutoCard, AutoparkCard, AutoparkDetailed, AutoparkRegion, AutoProfile, ReviewUser } from '@models';
import { autoparkDetailedData, carsData, reviewsUserData, topAutoparksCards } from '@test-data';

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

  public getAutoparksRegions(): Observable<AutoparkRegion[]> {
    return of( [
      {
        id: 1,
        name: 'Москва'
      },
      {
        id: 2,
        name: 'Минск'
      },
      {
        id: 3,
        name: 'Гомель'
      },
      {
        id: 4,
        name: 'Питер'
      },
      {
        id: 5,
        name: 'Новосибирск'
      },
    ] );
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
