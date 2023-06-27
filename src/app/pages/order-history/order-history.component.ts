import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { BreadcrumbService, CarService } from '@services';
import { OrderHistoryCarCard } from '@models';

import { ORDER_HISTORY_DEPS } from './order-history.dependencies';
import { MenuItem } from 'primeng/api';
import { AppRoutes, MainRoutes } from '@constants';

@Component( {
  selector: 'app-order-history',
  standalone: true,
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
  imports: [ORDER_HISTORY_DEPS],
} )
export class OrderHistoryComponent implements OnInit {

  public orderedCars$: Observable<OrderHistoryCarCard[]>;

  constructor(
    private store: Store,
    private service: CarService,
    private breadcrumbService: BreadcrumbService,
  ) {}

  ngOnInit(): void {
    this.setBreadcrumbs();
    this.orderedCars$ = this.service.getOrderHistoryCars( 1,20 );
  }

  private setBreadcrumbs(): void {
    const breadcrumb: MenuItem = {
      label: 'История заказов',
      routerLink: `${ AppRoutes.MAIN }/${ MainRoutes.ORDER_HISTORY }`
    };
    this.breadcrumbService.addBreadcrumb( breadcrumb );
  }

}
