import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { UserProfile } from '@models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../helpers';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  public getMe(): Observable<UserProfile> {
    return this.httpService.get<any>(`${environment.apiUrl}/users/me`).pipe(
      map((response: UserProfile) => {
        return <UserProfile>{
          ...response,
          avatar: response.avatar ? response.avatar + '?' + new Date().getTime() : '',
          requestsCounter: 4,
          ordersCounter: 10,
          reviewsAboutUserCounter: 0,
          reviewsByUserCounter: 0,
          favoriteCarsCounter: 0,
          favoriteAutoparksCounter: 0,
        };
      })
    );
  }

  public changeUserProfileDescription(description: string): Observable<string> {
    return this.httpService
      .patch<{
        info: string;
      }>(`${environment.apiUrl}/users/info`, { info: description }, { withCredentials: true })
      .pipe(map(response => response.info));
  }

  public changeUserAvatar(newAvatar: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', newAvatar);

    return this.httpService
      .patch<{
        url: string;
      }>(`${environment.apiUrl}/users/avatar`, formData, { withCredentials: true })
      .pipe(map(response => response.url + '?' + new Date().getTime()));
  }

  public deleteUserAvatar(): Observable<any> {
    return this.httpService.delete<any>(`${environment.apiUrl}/users/avatar`, {});
  }
}
