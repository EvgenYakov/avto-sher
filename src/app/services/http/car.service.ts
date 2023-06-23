import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { CarCard, CarProfile } from '@models';

import { BaseService } from '../helpers';

@Injectable( {
  providedIn: 'root'
} )
export class CarService extends BaseService {

  public getAutoparkCars(autoparkId: number, page: number, limit: number = 5): Observable<CarCard[]> {
    return this.httpService.get<any[]>( `${ environment.apiUrl }/cars/autopark/${ autoparkId }`, {
      params: {
        page,
        limit
      }
    } );
  }

  public getCarProfile(carId: number): Observable<CarProfile> {
    return this.httpService.get<any>( `${ environment.apiUrl }/cars/${ carId }` ).pipe(
      map( (response) => {
        const car = response.car;
        return {
          ...car,
          autoparkId: 18,
          autoparkAddress: 'Москва, ул. Тверская, 42'
        }
      } )
    );
  }
}
