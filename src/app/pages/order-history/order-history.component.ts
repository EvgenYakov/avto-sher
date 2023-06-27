import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { CarService } from '@services';
import { OrderHistoryCarCard } from '@models';

import { ORDER_HISTORY_DEPS } from './order-history.dependencies';

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
    private service: CarService
  ) {}

  ngOnInit(): void {
    this.orderedCars$ = this.service.getOrderHistoryCars( 1,20 );
  }

}
