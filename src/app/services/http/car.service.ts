import { Injectable } from '@angular/core';

import { CarFilterParams } from '@components';
import { environment } from '@environments/environment';
import { CarCard, CarProfile, CreateCar, OrderHistoryCarCard, PaginationResponse } from '@models';
import { Observable, map } from 'rxjs';

import { BaseService } from '../helpers';
import { MockBonusesService } from "../helpers/mock-bonuses.service";

@Injectable({
  providedIn: 'root',
})
export class CarService extends BaseService {

  constructor(
    private mockBonusesService: MockBonusesService
  ) {
    super();
  }

  public getAllCars(region: string, page: number, limit: number): Observable<PaginationResponse<CarCard[]>> {
    return this.httpService.get<PaginationResponse<CarCard[]>>(`${environment.apiUrl}/cars`, {
      params: {
        page,
        limit,
        region,
      },
    });
  }

  public getOrderHistoryCars(page: number, limit: number = 5): Observable<OrderHistoryCarCard[]> {
    return this.httpService.get<[]>(`${environment.apiUrl}/cars`, {
      params: {
        page,
        limit,
      },
    });
  }

  public getCarsByFilter(
    filterParams: CarFilterParams,
    region: string,
    page: number,
    limit: number
  ): Observable<PaginationResponse<CarCard[]>> {
    return this.httpService.post<PaginationResponse<CarCard[]>>(`${environment.apiUrl}/cars/filter`, filterParams, {
      params: {
        page,
        limit,
        region,
      },
    });
  }

  public getAutoparkCars(
    autoparkId: number,
    page: number,
    limit: number = 5
  ): Observable<PaginationResponse<CarCard[]>> {
    return this.httpService.get<PaginationResponse<CarCard[]>>(`${environment.apiUrl}/cars/autopark/${autoparkId}`, {
      params: {
        page,
        limit,
      },
    });
  }

  public getCarProfile(carId: number): Observable<CarProfile> {
    return this.httpService.get<CarProfile>(`${environment.apiUrl}/cars/${carId}`).pipe(
      map((car) => {
        return {
          ...car,
          autopark: {
            ...car.autopark,
            bonuses: this.mockBonusesService.getRandomBonuses()
          }
        };
      })
    );
  }

  public getCarsBrands(region: string): Observable<string[]> {
    return this.httpService.get<string[]>(`${environment.apiUrl}/cars/brands/used`, { params: { region } });
  }

  public getModelsByBrand(region: string, brand: string): Observable<string[]> {
    return this.httpService.get<string[]>(`${environment.apiUrl}/cars/models/used`, { params: { brand, region } });
  }

  public createCar(car: any): Observable<CarCard> {
    return this.httpService.post<CarCard>(`${environment.apiUrl}/cars`, car);
  }

  public updateCar(id: number | string, car: CreateCar): Observable<CarCard> {
    return this.httpService.put<CarCard>(`${environment.apiUrl}/cars/${id}`, car);
  }

  public deleteCar(id: number | string): Observable<void> {
    return this.httpService.delete<void>(`${environment.apiUrl}/cars/${id}`);
  }

  public deleteCarImage(id: number, url: string): Observable<void> {
    return this.httpService.delete<void>(`${environment.apiUrl}/cars/images/${id}`, { body: { imageUrls: [url] } });
  }

  public addCarImages(id: number, files: FormData): Observable<{ urls: string[] }> {
    return this.httpService.patch<{ urls: string[] }>(`${environment.apiUrl}/cars/images/${id}`, files, {
      withCredentials: true,
    });
  }
}
