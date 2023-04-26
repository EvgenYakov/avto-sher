import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalStorageKeys } from '@constants';
import { LocalStorageService } from '@services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${ this.localStorageService.getItemFromStorage(LocalStorageKeys.ACCESS_TOKEN) }` }
    });
    return next.handle(request);
  }
}
