import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';

import { AuthService } from '@services';
import { AppState, selectIsLoggedIn } from '@store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private store: Store<AppState>
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(selectIsLoggedIn),
      map((isLoggedIn: boolean) => isLoggedIn ? true : (this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } }), false)),
      take(1)
    );
  }

}
