import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Subject, takeUntil } from 'rxjs';
import { AppRoutes, LoadingTypes, MainRoutes } from '@constants';
import {
  loadAutoparkDetailed,
  selectAutoparkCars,
  selectAutoparkDetailed,
  selectAutoparkReviews,
  selectLoading
} from '@store';

import { AUTOPARK_DETAILED_DEPS } from './autopark-detailed.dependencies';
import { BreadcrumbService } from '../../../../services/helpers/breadcrumb.service';

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
  private breadcrumbService = inject( BreadcrumbService );

  public isLoading = this.store.select( selectLoading, { type: LoadingTypes.AUTOPARK_DETAILED } );
  public autoparkDetailed$ = this.store.select( selectAutoparkDetailed );
  public cars = this.store.select( selectAutoparkCars );
  public reviews = this.store.select( selectAutoparkReviews );

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (params) => {
      this.store.dispatch( loadAutoparkDetailed( { autoparkId: params['id'] } ) );
      this.setBreadcrumbs( params['id'] );
    } );
  }

  private setBreadcrumbs(autoparkId: number): void {
    const breadcrumb = {
      label: 'Автопарк',
      routerLink: `${ AppRoutes.MAIN }/${ MainRoutes.AUTOPARK_DETAILED }/${ autoparkId }`
    };
    this.breadcrumbService.addBreadcrumb( breadcrumb );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
