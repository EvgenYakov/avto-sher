import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { finalize, Observable } from 'rxjs';

import { UiFacade } from '../../../store/shared/ui.facade';

@Injectable()
export class BaseApiInterceptor implements HttpInterceptor {
  constructor(private uiFacade: UiFacade) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (/^\.?\/?assets/.test(req.url) || /\/api\/admin-auth\/login$/.test(req.url)) {
      return next.handle(req);
    }

    this.uiFacade.startRequest();

    const reqClone = req.clone();
    return next.handle(reqClone).pipe(finalize(() => this.uiFacade.endRequest()));
  }
}
