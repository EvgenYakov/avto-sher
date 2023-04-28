import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthState, refreshTokenRequest } from '@store';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private store: Store<AuthState>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status)) {
        this.store.dispatch(refreshTokenRequest());
      }

      const error = (err && err.error && err.error.message) || err.statusText;
      console.error(err);
      return throwError(() => error);
    }))
  }
}
