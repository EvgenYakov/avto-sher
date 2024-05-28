import { Injectable } from '@angular/core';

import { CarFilterParams } from '@components';
import { environment } from '@environments/environment';
import { CarCard, CarProfile, CreateCar, OrderHistoryCarCard, PaginationResponse } from '@models';
import { Observable, map } from 'rxjs';

import { BaseService } from '../helpers';

@Injectable({
  providedIn: 'root',
})
export class CarService extends BaseService {
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
        const bonuses = this.getRandomBonuses();
        return {
          ...car,
          autopark: {
            ...car.autopark,
            bonuses
          }
        };
      })
    );
  }

  private getRandomBonuses(): any[] {
    const allBonuses = this.getBonuses();
    const randomIndices = this.getRandomIndices(allBonuses.length, 3); // Выбираем 3 случайных индекса
    return randomIndices.map(index => allBonuses[index]);
  }

  private getRandomIndices(length: number, count: number): number[] {
    const indices = Array.from({ length }, (_, index) => index); // Создаем массив индексов от 0 до length - 1
    indices.sort(() => Math.random() - 0.5); // Перемешиваем массив индексов
    return indices.slice(0, count); // Выбираем первые count индексов
  }

  private getBonuses(): any[] {
    return [
      {
        id: 1,
        title: 'Ремонт автомобиля',
        description: 'Ремонт кузова автомобиля осуществляется автопарком в случае повреждения не по вине водителя',
        icon: 'assets/icons/bonuses/1.svg'
      },
      {
        id: 2,
        title: 'Сезонная замена шин',
        description: 'Замена шин осуществляется парком 2 раза в год',
        icon: 'assets/icons/bonuses/2.svg'
      },
      {
        id: 3,
        title: 'Служба поддержки',
        description: 'Служба поддержки автопарка работает 24/7',
        icon: 'assets/icons/bonuses/3.svg'
      },
      {
        id: 4,
        title: 'Служба поддержки автопарка работает 24/7',
        description: 'Автопарк организовывает сервисное обслуживание или возмещает расходы на него',
        icon: 'assets/icons/bonuses/4.svg'
      },
      {
        id: 5,
        title: 'Автопарк организовывает сервисное обслуживание или возмещает расходы на него',
        description: 'Автопарк предоставляет Android-устройство на время аренды',
        icon: 'assets/icons/bonuses/5.svg'
      },
    ]
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
