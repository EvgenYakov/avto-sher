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

  public changeUserAvatar(newAvatar: File): Observable<any> {
    const formData = new FormData();
    formData.append( 'image', newAvatar );

    return this.httpService.put<string>( `${ environment.apiUrl }/users/avatar`, formData, { withCredentials: true } );
  }

  public deleteUserAvatar(): Observable<any> {
    console.log( 'here' )
    return this.httpService.delete<any>( `${ environment.apiUrl }/users/avatar`, {} )
  }
}
