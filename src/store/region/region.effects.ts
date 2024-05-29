import { Injectable } from '@angular/core';

import { LocalStorageKeys } from '@constants';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AutoparkService, LocalStorageService } from '@services';
import { loadRegions, loadRegionsSuccess, setCurrentRegion, setCurrentRegionSuccess } from '@store';
import { map, switchMap } from 'rxjs';

@Injectable()
export class RegionEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private autoparkService: AutoparkService
  ) {}

  public changeRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setCurrentRegion),
      map(({ region }) => {
        this.localStorageService.addItemToStorage(LocalStorageKeys.REGION, region);
        return setCurrentRegionSuccess();
      })
    )
  );

  public loadRegions = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRegions),
      switchMap(() => this.autoparkService.getRegions()),
      map(regions => loadRegionsSuccess({ regions }))
    )
  );
}
