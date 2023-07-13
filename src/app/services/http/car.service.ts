import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { CarCard, CarProfile, OrderHistoryCarCard } from '@models';
import { CarFilterParams } from '@components';

import { BaseService } from '../helpers';

@Injectable( {
  providedIn: 'root'
} )
export class CarService extends BaseService {

  public getAllCars(region: string, page: number, limit: number): Observable<CarCard[]> {
    return this.httpService.get<any>( `${ environment.apiUrl }/cars`, {
      params: {
        page,
        limit,
        region
      }
    } ).pipe(
      map((response) => response.data)
    )
  }

  public getOrderHistoryCars(page: number, limit: number = 5): Observable<OrderHistoryCarCard[]> {
    return this.httpService.get<[]>( `${ environment.apiUrl }/cars`, {
      params: {
        page,
        limit
      }
    } );
  }

  public getCarsByFilter(filterParams: CarFilterParams, region: string, page: number, limit: number): Observable<CarCard[]> {
    return this.httpService.post<CarCard[]>( `${ environment.apiUrl }/cars/filter`, filterParams, {
      params: {
        page,
        limit,
        region
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
    return this.httpService.get<CarProfile>( `${ environment.apiUrl }/cars/${ carId }` );
  }

  public getCarsBrands(region: string): Observable<string[]> {
    return this.httpService.get<string[]>( `${ environment.apiUrl }/cars/brands/used`, { params: { region } } );
  }

  public getModelsByBrand(region: string, brand: string): Observable<string[]> {
    return this.httpService.get<string[]>( `${ environment.apiUrl }/cars/models/used`, { params: { brand, region } } );
  }
}
