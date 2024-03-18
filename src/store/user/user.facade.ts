import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { selectUserAutoparks, selectUserId, selectUserProfile } from '@store';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  userProfile$ = this.store.select(selectUserProfile);
  userId$ = this.store.select(selectUserId);
  userAutoparks$ = this.store.select(selectUserAutoparks);

  constructor(private store: Store) {}
}
