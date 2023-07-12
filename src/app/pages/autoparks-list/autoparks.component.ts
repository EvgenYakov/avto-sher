import { Component, OnDestroy, OnInit } from '@angular/core';
import { AutoparkCardComponent, AutoparkFiltersComponent } from './components';
import { LoadMoreComponent, SpinnerComponent } from '@components';
import { Store } from '@ngrx/store';
import { BreadcrumbService } from '@services';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AutoparkCard } from '@models';
import { MenuItem } from 'primeng/api';
import { AppRoutes, LoadingTypes } from '@constants';
import { getAutoparksEntities, loadAutoparks, selectCurrentRegion, selectLoading } from '@store';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@Component( {
  selector: 'app-autoparks-list',
  standalone: true,
  templateUrl: './autoparks.component.html',
  styleUrls: ['./autoparks.component.scss'],
  imports: [
    AutoparkFiltersComponent,
    LoadMoreComponent,
    AutoparkCardComponent,
    NgForOf,
    AsyncPipe,
    SpinnerComponent,
    NgIf
  ],
} )
export class AutoparksComponent implements OnInit, OnDestroy {

  public autoparks$: Observable<AutoparkCard[]>;
  public isLoading$: Observable<boolean>;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private breadcrumbService: BreadcrumbService,
  ) {}


  ngOnInit(): void {
    this.setBreadcrumbs();
    this.getDataFromStore();
  }

  private setBreadcrumbs(): void {
    const breadcrumb: MenuItem = {
      label: 'Автопарки',
      routerLink: `${ AppRoutes.MAIN }/${ AppRoutes.AUTOPARKS }`
    };
    this.breadcrumbService.addBreadcrumb( breadcrumb );
  }

  private getDataFromStore(): void {

    this.autoparks$ = this.store.select( getAutoparksEntities );

    this.isLoading$ = this.store.select( selectLoading, { type: LoadingTypes.AUTOPARKS } );

    this.getAutoparks();
  }

  private getAutoparks(): void {
    this.store.select( selectCurrentRegion ).pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (region) => {
      this.store.dispatch( loadAutoparks( { regionName: region.name } ) );
    } );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
