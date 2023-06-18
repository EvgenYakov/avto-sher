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
    formData.append('image', newAvatar);

    return this.httpService.put<FormData>( `${ environment.apiUrl }/users/avatar`, formData, { withCredentials: true } ).pipe(
      map(() => 'https://storage.yandexcloud.net/yaavto/user-avatars/49.jpg')
    )
  }

  public deleteUserAvatar(): Observable<any> {
     return this.httpService.delete( `${ environment.apiUrl }/users/avatar`, { withCredentials: true } )
  }
}
