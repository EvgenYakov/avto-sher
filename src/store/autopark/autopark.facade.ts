import { Injectable } from '@angular/core';

import { AutoparkCard } from '@models';
import { Store } from '@ngrx/store';
import { loadAutoparkCars, selectActiveAutopark, setAutopark } from '@store';

import { selectAutoparkCars, selectAutoparksEntities } from './selectors';

@Injectable({
  providedIn: 'root',
})
export class AutoparkFacade {
  autoParkCars$ = this.store.select(selectAutoparkCars);
  autoParks$ = this.store.select(selectAutoparksEntities);
  activeAutopark$ = this.store.select(selectActiveAutopark);

  constructor(private store: Store) {}

  loadAutoparkCars(autoparkId: number): void {
    this.store.dispatch(loadAutoparkCars({ autoparkId }));
  }

  selectAutoPark(autopark: AutoparkCard): void {
    this.store.dispatch(setAutopark({ autopark }));
  }
}
