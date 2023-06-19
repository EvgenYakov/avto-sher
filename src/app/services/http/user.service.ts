import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';

import { BaseService } from '../helpers';

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

  public changeUserAvatar(newAvatar: File): Observable<string> {
    const formData = new FormData();
    formData.append( 'image', newAvatar );

    return this.httpService.put<{
      url: string
    }>( `${ environment.apiUrl }/users/avatar`, formData, { withCredentials: true } ).pipe(
      map( (response) => response.url + '?' + new Date().getTime() )
    )
  }

  public deleteUserAvatar(): Observable<any> {
    return this.httpService.delete<any>( `${ environment.apiUrl }/users/avatar`, {} )
  }
}
