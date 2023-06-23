import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AutoparkDetailed, CarCard, CarProfile } from '@models';

import { BaseService } from '../helpers';

@Injectable( {
  providedIn: 'root'
} )
export class CarService extends BaseService {

  public getAutoparkCars(autopark: AutoparkDetailed, page: number, limit: number = 5): Observable<CarCard[]> {
    return this.httpService.get<any[]>( `${ environment.apiUrl }/cars/autopark/${ autopark.id }`, {
      params: {
        page,
        limit
      }
    } ).pipe(
      map( (response) => response.map( (car) => ({
        ...car,
        autoparkName: autopark.title,
        region: autopark.region
      }) ) )
    );
  }

  public getCarProfile(carId: number): Observable<CarProfile> {
    return this.httpService.get<any>( `${ environment.apiUrl }/cars/${ carId }` ).pipe(
      map((response) => {
        console.log(response)
        return response
      })
    );
  }
}
