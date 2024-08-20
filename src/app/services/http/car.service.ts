import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CarFilterParams } from '@components';
import { environment } from '@environments/environment';
import { CarCard, CarProfile, CreateCar, OrderHistoryCarCard, PaginationResponse } from '@models';
import { map, Observable } from 'rxjs';

import { BaseService } from '../helpers';
import { MockBonusesService } from '../helpers/mock-bonuses.service';

@Injectable({
  providedIn: 'root',
})
export class CarService extends BaseService<CarCard> {
  readonly apiPrefix = 'cars';

  constructor(
    private mockBonusesService: MockBonusesService,
    private httpService: HttpClient
  ) {
    super(httpService);
  }

  public getAllCars(region: string, page: number, limit: number): Observable<PaginationResponse<CarCard[]>> {
    return this.getList({
      page,
      limit,
      regionName: region,
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
    return this.httpService.post<PaginationResponse<CarCard[]>>(`${this.url}/filter`, filterParams, {
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
    return this.httpService.get<PaginationResponse<CarCard[]>>(`${this.url}/autopark/${autoparkId}`, {
      params: {
        page,
        limit,
      },
    });
  }

  public getCarProfile(carId: number): Observable<CarProfile> {
    return this.httpService.get<CarProfile>(`${this.url}/${carId}`).pipe(
      map(car => {
        return {
          ...car,
          autopark: {
            ...car.autopark,
            bonuses: this.mockBonusesService.getRandomBonuses(),
          },
        };
      })
    );
  }

  public getCarsBrands(region: string): Observable<string[]> {
    return this.httpService.get<string[]>(`${this.url}/brands/used`, { params: { region } });
  }

  public getModelsByBrand(region: string, brand: string): Observable<string[]> {
    return this.httpService.get<string[]>(`${this.url}/models/used`, { params: { brand, region } });
  }

  public createCar(car: any): Observable<CarCard> {
    return this.create(car);
  }

  public updateCar(id: number | string, car: CreateCar): Observable<CarCard> {
    return this.httpService.put<CarCard>(`${this.url}/${id}`, car);
  }

  public deleteCar(id: number | string): Observable<void> {
    return this.httpService.delete<void>(`${this.url}/${id}`);
  }

  public deleteCarImage(id: number, url: string): Observable<void> {
    return this.httpService.delete<void>(`${this.url}/images/${id}`, { body: { imageUrls: [url] } });
  }

  public addCarImages(id: number, files: FormData): Observable<{ urls: string[] }> {
    return this.httpService.patch<{ urls: string[] }>(`${this.url}/images/${id}`, files, {
      withCredentials: true,
    });
  }
}
