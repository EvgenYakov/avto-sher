import { ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Subject, takeUntil } from 'rxjs';

import { AutoProfile } from '@models';
import { carData } from '@test-data';


import { RESPONSIVE_OPTIONS } from '../../constants';
import { AUTO_DETAILED_DEPS } from './auto-detailed.dependencies';
import { MenuItem } from 'primeng/api';
import { AppRoutes, MainRoutes } from '@constants';
import { addBreadcrumb } from '@store';
import { BreadcrumbService } from '../../../../services/helpers/breadcrumb.service';

@Component( {
  selector: 'app-car-detailed',
  templateUrl: './auto-detailed.component.html',
  styleUrls: ['./auto-detailed.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AUTO_DETAILED_DEPS]
} )
export class AutoDetailedComponent implements OnInit, OnDestroy {
  @Input() public autoCard: AutoProfile = carData;


  private store = inject( Store );
  private activatedRoute = inject( ActivatedRoute );
  private breadcrumbService = inject( BreadcrumbService );

  private destroy$ = new Subject<void>();

  public responsiveOptions = RESPONSIVE_OPTIONS;

  ngOnInit(): void {
    this.getQueryParams();
  }

  private getQueryParams(): void {
    this.activatedRoute.params.pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (params) => {
      this.setBreadcrumbs( params['id'] );
    } );
  }

  private setBreadcrumbs(autoId: number): void {
    const breadcrumb: MenuItem = {
      label: 'Автомобиль',
      routerLink: `${ AppRoutes.MAIN }/${ MainRoutes.AUTO_DETAILED }/${ autoId }`
    };
    this.breadcrumbService.addBreadcrumb(breadcrumb);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
