import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { IRequestCollection, PaginationResponse } from '@models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService<T> {
  abstract apiPrefix: string;
  protected api: string = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  protected get url(): string {
    return `${this.api}/${this.apiPrefix}`;
  }

  protected getList(request: IRequestCollection, routes?: (string | number)[]): Observable<PaginationResponse<T[]>> {
    const url = routes?.length ? `${this.url}/${routes.join('/')}` : this.url;

    return this.http.get<PaginationResponse<T[]>>(url, {
      params: {
        page: request.page,
        limit: request.limit,
        region: request.regionName!,
      },
    });
  }

  protected getById(id: number | string): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  protected getEntityById(id: string): Observable<T> {
    return this.http.post<T>(`${this.url}`, { id });
  }

  protected update(id: number | string, payload: object): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, payload);
  }

  protected getListById(route?: string, id?: string): Observable<PaginationResponse<T[]>> {
    const url = `${this.url}/${route}`;

    return this.http.post<PaginationResponse<T[]>>(url, { id });
  }

  protected create(payload: object): Observable<T> {
    return this.http.post<T>(`${this.url}`, payload);
  }

  protected delete(id: number | string): Observable<null> {
    return this.http.delete<null>(`${this.url}/${id}`);
  }
}
