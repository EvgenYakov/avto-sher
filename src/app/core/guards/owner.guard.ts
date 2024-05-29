import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AppRoutes, ControlPanel, UserRole } from '@constants';
import { map } from 'rxjs';

import { UserFacade } from '../../../store/user/user.facade';

export const ownerGuard: CanActivateFn = (route, state) => {
  const user = inject(UserFacade).userProfile$;
  const router = inject(Router);
  return user.pipe(
    map(user => {
      if (user.role !== UserRole.OWNER && user.role !== UserRole.ADMIN) {
        router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CARS_TABLE]);
        return false;
      }

      return true;
    })
  );
};
