import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected api: string = environment.apiUrl;

  protected httpService = inject(HttpClient);
}
