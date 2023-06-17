import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

import { BaseService } from '../helpers';
import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class UserService extends BaseService {

  public changeUserProfileDescription(description: string): Observable<string> {
    return this.httpService.patch<{
      info: string
    }>( `${ environment.apiUrl }/users/info`, { info: description }, { withCredentials: true } ).pipe(
      map( (response) => response.info )
    )
  }
}
