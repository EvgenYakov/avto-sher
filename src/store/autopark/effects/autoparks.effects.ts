import { inject, Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import { AutoparkService } from '@services';
import {
  loadAutoparkRegions,
  loadAutoparkRegionsFailure,
  loadAutoparkRegionsSuccess
} from '../actions';

@Injectable()
export class AutoparksEffects {
  private actions$ = inject( Actions );
  private autoparkService = inject( AutoparkService );

  public loadAutoparksRegions = createEffect( () => this.actions$.pipe(
    ofType( loadAutoparkRegions ),
    switchMap( () => this.autoparkService.getAutoparksRegions() ),
    map( (regions) => loadAutoparkRegionsSuccess( { regions } ) ),
    catchError( () => of( loadAutoparkRegionsFailure() ) ),
  ) );
}