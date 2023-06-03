import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, Subject, takeUntil } from 'rxjs';

import { AutoCard, AutoparkDetailed, ReviewUser } from '@models';
import { LoadingTypes } from '@constants';
import {
  loadAutoparkDetailed,
  selectAutoparkCars,
  selectAutoparkDetailed,
  selectAutoparkReviews,
  selectLoading
} from '@store';

import { AUTOPARK_DETAILED_DEPS } from './autopark-detailed.dependencies';

@Component( {
  selector: 'app-autopark-profile',
  templateUrl: './autopark-detailed.component.html',
  styleUrls: ['./autopark-detailed.component.scss'],
  standalone: true,
  imports: [AUTOPARK_DETAILED_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AutoparkDetailedComponent implements OnInit, OnDestroy {

  private store = inject( Store );
  private activatedRoute = inject( ActivatedRoute );

  public isLoading: Observable<boolean> = this.store.select( selectLoading, { type: LoadingTypes.AUTOPARK_DETAILED } );
  public autoparkDetailed$: Observable<AutoparkDetailed> = this.store.select( selectAutoparkDetailed );
  public cars: Observable<AutoCard[]> = this.store.select( selectAutoparkCars );
  public reviews: Observable<ReviewUser[]> = this.store.select( selectAutoparkReviews );

  private destroy$ = new Subject<void>();

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (params) => {
      this.store.dispatch( loadAutoparkDetailed( { autoparkId: params['id'] } ) );
    } )
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
