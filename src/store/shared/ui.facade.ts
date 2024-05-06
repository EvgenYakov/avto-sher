import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { selectInRequest } from '@store';

import * as UI_ACTIONS from './loading/loading.actions';

@Injectable({
  providedIn: 'root',
})
export class UiFacade {
  inRequest$ = this.store.select(selectInRequest);

  constructor(private store: Store) {}

  startRequest(): void {
    this.store.dispatch(UI_ACTIONS.startRequest());
  }

  endRequest(): void {
    this.store.dispatch(UI_ACTIONS.endRequest());
  }
}
