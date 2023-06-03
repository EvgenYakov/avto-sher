import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BaseService } from '../helpers/base.service';
import { carData, carsData } from '@test-data';
import { AutoCard, AutoProfile, FilterParams } from '@models';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService {

  public getListCars(): Observable<AutoCard[]> {
    return of(carsData);
  }

  public filteredCars(filterParams: FilterParams): Observable<AutoCard[]> {
    return of(carsData);
  }

  public createCar(carNew: AutoProfile, autoparkId: number): Observable<AutoProfile> {
    return of(carData);
  }

  public deleteCar(carId: number): Observable<number> {
    return of(1);
  }

  public getCarProfile(carId: number): Observable<AutoProfile> {
    return of(carData);
  }

  public addPhoto(carId: number, photo: string): Observable<string> {
    return of('https://picsum.photos/200/300');
  }

  public deletePhotos(carId: number, photos: string[]): Observable<string[]> {
    return of(['https://picsum.photos/id/237/200/300', 'https://picsum.photos/seed/picsum/200/300'])
  }
}
