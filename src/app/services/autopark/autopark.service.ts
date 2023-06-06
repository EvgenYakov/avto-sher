import { Injectable } from '@angular/core';

import { map, Observable, of, timer } from 'rxjs';

import { BaseService } from '../helpers';

import { Auction, AutoCard, AutoparkCard, AutoparkDetailed, AutoparkRegion, ReviewUser } from '@models';
import { autoparkDetailedData, carsData, reviewsUserData, topAutoparksCards } from '@test-data';
import { environment } from '@environments/environment';

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

  public getAuctionAutoparksByRegion(regionId: number): Observable<Auction> {
    return this.httpService.get<Auction>( `${ environment.apiUrl }/autoparks/main-page` ).pipe(
      map( (auctionObject) => {
        const updatedAuctionObject: Auction = {
          top: auctionObject.top.map( (cards) => ({
            ...cards,
            rating: Math.random() * 5,
            carsQuantity: Math.floor( (Math.random() * 100) + 1 )
          }) ),
          checked: auctionObject.checked.map( (cards) => ({
            ...cards,
            rating: Math.random() * 5,
            carsQuantity: Math.floor( (Math.random() * 100) + 1 )
          }) ),
          new: auctionObject.new.map( (cards) => ({
            ...cards,
            rating: Math.random() * 5,
            carsQuantity: Math.floor( (Math.random() * 100) + 1 )
          }) ),
        };

        return updatedAuctionObject;
      } )
    );
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
