import { Injectable } from '@angular/core';
import { BaseService } from '@services';
import { Observable, of } from 'rxjs';
import { CarCard } from '../../../store/car/interfaces/car.interface';
import { carData, carsData } from '@test-data';
import { CarProfile } from '../../../store/car/interfaces/car-profile.interface';
import { HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService {

  public getCars(autoparkId: number): Observable<CarCard[]> {
    return of(carsData);
  }

  public createCar(carNew: CarProfile, autoparkId: number): Observable<CarProfile> {
    return of(carData);
  }

  public deleteCar(carId: number): Observable<HttpStatusCode> {
    return of(HttpStatusCode.Ok);
  }

  public getCarProfile(carId: number): Observable<CarProfile> {
    return of(carData);
  }

  public addPhoto(carId: number, photo: string): Observable<string> {
    return of('https://picsum.photos/200/300');
  }

  public deletePhotos(carId: number, photos: string[]): Observable<string[]> {
    return of(['https://picsum.photos/id/237/200/300', 'https://picsum.photos/seed/picsum/200/300'])
  }
}
