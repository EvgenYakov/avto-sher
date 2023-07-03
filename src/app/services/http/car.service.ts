import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { CarCard, CarProfile, FilterParams, OrderHistoryCarCard } from '@models';

import { BaseService } from '../helpers';

@Injectable( {
  providedIn: 'root'
} )
export class CarService extends BaseService {

  public getAllCars(page: number, limit: number = 12): Observable<CarCard[]> {
    console.log(page)
    return this.httpService.get<CarCard[]>( `${ environment.apiUrl }/cars`, {
      params: {
        page,
        limit
      }
    } )
  }

  public getOrderHistoryCars(page: number, limit: number = 5): Observable<OrderHistoryCarCard[]> {
    return this.httpService.get<[]>( `${ environment.apiUrl }/cars`, {
      params: {
        page,
        limit
      }
    } );
  }

  public getCarsByFilter(filterParams: FilterParams, page: number = 1, limit: number = 5): Observable<CarCard[]> {
    return this.httpService.post<CarCard[]>( `${ environment.apiUrl }/cars/filter`, filterParams, {
      params: {
        page,
        limit
      }
    } );
  }

  public getAutoparkCars(autoparkId: number, page: number, limit: number = 5): Observable<CarCard[]> {
    return this.httpService.get<CarCard[]>( `${ environment.apiUrl }/cars/autopark/${ autoparkId }`, {
      params: {
        page,
        limit
      }
    } )
  }

  public getCarProfile(carId: number): Observable<CarProfile> {
    return this.httpService.get<any>( `${ environment.apiUrl }/cars/${ carId }` ).pipe(
      map( (response) => {
        const car = response.car;
        return {
          ...car,
          autoparkId: car.autopark.id,
          autoparkAddress: car.autopark.address
        }
      } )
    );
  }

  public getCarsBrands(): Observable<string[]> {
    return this.httpService.get<string[]>( `${ environment.apiUrl }/cars/brands/used` );
  }

  public getModelsByBrand(brand: string): Observable<string[]> {
    return this.httpService.get<string[]>( `${ environment.apiUrl }/cars/models/used`, { params: { brand } } );
  }
}
