import { Injectable } from '@angular/core';

import { map, Observable, of } from 'rxjs';

import { environment } from '@environments/environment';
import { AutoCard, AutoparkDetailed, AutoProfile, CarCard, FilterParams } from '@models';
import { carData, carsData } from '@test-data';

import { BaseService } from '../helpers';

@Injectable( {
  providedIn: 'root'
} )
export class CarService extends BaseService {

  public getAutoparkCars(autopark: AutoparkDetailed, page: number, limit: number = 5): Observable<CarCard[]> {
    console.log( `getAutoparkCars: autoparkId=${ autopark.id }, page=${ page }, limit=${ limit }` )
    return this.httpService.get<any[]>( `${ environment.apiUrl }/cars/autopark/${autopark.id}`, {
      params: {
        page,
        limit
      }
    } ).pipe(
      map((response) => response.map((car) => ({
        ...car,
        autoparkName: autopark.title,
        region: autopark.region
      })))
    );
  }

  public getListCars(): Observable<AutoCard[]> {
    return of( carsData );
  }

  public filteredCars(filterParams: FilterParams): Observable<AutoCard[]> {
    return of( carsData );
  }

  public createCar(carNew: AutoProfile, autoparkId: number): Observable<AutoProfile> {
    return of( carData );
  }

  public deleteCar(carId: number): Observable<number> {
    return of( 1 );
  }

  public getCarProfile(carId: number): Observable<AutoProfile> {
    return of( carData );
  }

  public addPhoto(carId: number, photo: string): Observable<string> {
    return of( 'https://picsum.photos/200/300' );
  }

  public deletePhotos(carId: number, photos: string[]): Observable<string[]> {
    return of( ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/seed/picsum/200/300'] )
  }
}
