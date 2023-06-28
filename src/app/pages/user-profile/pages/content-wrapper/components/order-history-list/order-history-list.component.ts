import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { CarService } from '@services';
import { OrderHistoryCarCard } from '@models';

import { ORDER_HISTORY_DEPS } from './order-history.dependencies';

@Component( {
  selector: 'app-order-history-list',
  standalone: true,
  templateUrl: './order-history-list.component.html',
  styleUrls: ['./order-history-list.component.scss'],
  imports: [ORDER_HISTORY_DEPS],
} )
export class OrderHistoryListComponent implements OnInit {

  public orderedCars$: Observable<OrderHistoryCarCard[]>;

  constructor(
    private store: Store,
    private service: CarService,
  ) {}

  ngOnInit(): void {
    this.orderedCars$ = this.service.getOrderHistoryCars( 1,20 );
  }

}
