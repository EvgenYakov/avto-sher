import { Injectable } from '@angular/core';

import { AutoparkCard } from '@models';
import { Store } from '@ngrx/store';
import {
  loadAutoparkCars,
  loadAutoparksByOwner,
  loadMoreAutoparkCars,
  selectActiveAutopark,
  selectUserAutoparks,
  setAutopark,
} from '@store';

import { selectAutoparkCars, selectAutoparksEntities } from './selectors';

@Injectable({
  providedIn: 'root',
})
export class AutoparkFacade {
  autoParkCars$ = this.store.select(selectAutoparkCars);
  autoParks$ = this.store.select(selectAutoparksEntities);
  userAutoParks$ = this.store.select(selectUserAutoparks);
  activeAutopark$ = this.store.select(selectActiveAutopark);

  constructor(private store: Store) {}

  loadAutoparkCars(autoparkId: number): void {
    this.store.dispatch(loadAutoparkCars({ autoparkId }));
  }

  loadMoreAutoparkCars(): void {
    this.store.dispatch(loadMoreAutoparkCars());
  }

  loadAutoparksByOwner(): void {
    console.log('hello');
    this.store.dispatch(loadAutoparksByOwner());
  }

  selectAutoPark(autopark: AutoparkCard): void {
    this.store.dispatch(setAutopark({ autopark }));
  }
}
