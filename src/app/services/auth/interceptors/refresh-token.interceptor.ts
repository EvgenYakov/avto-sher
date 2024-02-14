import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { refreshTokenRequest } from '@store';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  private store = inject(Store);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if ([401, 403].includes(err.status)) {
          this.store.dispatch(refreshTokenRequest());
        }

        // const error = (err && err.error && err.error.message) || err.statusText;
        // return throwError( () => error );
        return throwError(() => err);
      })
    );
  }
}
