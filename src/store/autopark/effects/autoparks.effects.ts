import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoadingTypes, ToasterType } from '@constants';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AutoparkService } from '@services';
import { catchError, combineLatestWith, filter, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';

import { addBeErrorMessage, addLoading, removeLoading } from '../../shared';
import { selectUserId } from '../../user';
import {
  loadAuctionAutoparksByRegion,
  loadAuctionAutoparksByRegionSuccess,
  loadAutoparks,
  loadAutoparksByOwner,
  loadAutoparksByOwnerFailure,
  loadAutoparksByOwnerSuccess,
  loadAutoparksSuccess,
  setAutopark,
} from '../actions';
import { selectAutoparksLimit, selectAutoparksPage } from '../selectors';

@Injectable()
export class AutoparksEffects {
  constructor(
    private actions$: Actions,
    private autoparkService: AutoparkService,
    private store: Store
  ) {}

  public loadAuctionAutoparksByRegion = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAuctionAutoparksByRegion),
      switchMap(({ regionName }) => this.autoparkService.getAuctionAutoparksByRegion(regionName)),
      map(auctionAutoparks => loadAuctionAutoparksByRegionSuccess({ auctionAutoparks }))
    )
  );

  public loadAutoparks = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAutoparks),
      withLatestFrom(this.store.select(selectAutoparksPage), this.store.select(selectAutoparksLimit)),
      switchMap(([{ regionName }, page, limit]) => this.autoparkService.getAutoparksList(page, limit, regionName)),
      map(autoparkPagination =>
        loadAutoparksSuccess({
          autoparks: autoparkPagination.data,
          pagesLeft: autoparkPagination.metadata.pagesLeft,
        })
      )
    )
  );

  public loadAutoparksByOwner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAutoparksByOwner),
      combineLatestWith(this.store.select(selectUserId)),
      filter(([_, userId]) => userId !== undefined),
      switchMap(([_, userId]) =>
        this.autoparkService.getAutoparksByOwner(userId).pipe(
          mergeMap(autoparks => [loadAutoparksByOwnerSuccess({ autoparks }), setAutopark({ autopark: autoparks[0] })]),
          catchError((error: HttpErrorResponse) => {
            this.store.dispatch(addBeErrorMessage({ severity: ToasterType.ERROR, detail: error.error.message }));
            return of(loadAutoparksByOwnerFailure());
          })
        )
      )
    )
  );

  public addLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAuctionAutoparksByRegion, loadAutoparks, loadAutoparksByOwner),
      map(() => addLoading({ addLoading: LoadingTypes.AUTOPARKS }))
    )
  );

  public removeLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        loadAuctionAutoparksByRegionSuccess,
        loadAutoparksSuccess,
        loadAutoparksByOwnerSuccess,
        loadAutoparksByOwnerFailure
      ),
      map(() => removeLoading({ removeLoading: LoadingTypes.AUTOPARKS }))
    )
  );
}
