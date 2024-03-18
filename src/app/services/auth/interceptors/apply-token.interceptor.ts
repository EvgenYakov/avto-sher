import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LocalStorageKeys } from '@constants';
import { LocalStorageService } from '@services';
import { Observable } from 'rxjs';

@Injectable()
export class ApplyTokenInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.localStorageService.getItemFromStorage(LocalStorageKeys.ACCESS_TOKEN)}`,
      },
    });
    return next.handle(request);
  }
}
