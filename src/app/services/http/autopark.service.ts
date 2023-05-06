import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map, Observable, timer } from 'rxjs';

import { AutoCard, AutoparkCard, AutoparkDetailed, AutoProfile, ReviewAutopark } from '@models';
import { autoparkCardData, autoparkDetailedData, carsData, reviewsData } from '@test-data';

export interface AutoparkDetailedResponse {
  autoparkDetailed: AutoparkDetailed,
  cars: AutoCard[],
  reviews: ReviewAutopark[]
}

@Injectable({
  providedIn: 'root'
})
export class AutoparkService extends BaseService {
  public getAutoparks(): Observable<AutoparkCard[]> {
    return timer(1000).pipe(
      map(() => autoparkCardData)
    )
  }

  public getAutoparkById(autoparkId: number): Observable<AutoparkDetailedResponse> {
    return timer(500).pipe(
      map(() => {
        return {
          autoparkDetailed: autoparkDetailedData,
          cars: carsData,
          reviews: reviewsData
        };
      })
    );
  }

  public addAutoToAutopark(auto: AutoProfile, autoparkId: number): void {

  }
}
