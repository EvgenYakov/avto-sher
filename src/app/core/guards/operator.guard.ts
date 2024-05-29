import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserRole } from '@constants';
import { map } from 'rxjs';

import { UserFacade } from '../../../store/user/user.facade';

export const operatorGuard: CanActivateFn = (route, state) => {
  const user = inject(UserFacade).userProfile$;
  const router = inject(Router);
  return user.pipe(
    map(user => {
      if (user.role !== UserRole.OPERATOR && user.role !== UserRole.OWNER && user.role !== UserRole.ADMIN) {
        router.navigate(['/']);
        return false;
      }

      return true;
    })
  );
};
