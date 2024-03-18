import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { AppRoutes, LocalStorageKeys } from '@constants';

import { LocalStorageService } from '../helpers';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.localStorageService.getItemFromStorage(LocalStorageKeys.ACCESS_TOKEN);
    return token ? true : (this.router.navigate([AppRoutes.AUTH], { queryParams: { returnUrl: state.url } }), false);
  }
}
