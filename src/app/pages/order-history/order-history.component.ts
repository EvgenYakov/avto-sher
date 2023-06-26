import { Component } from '@angular/core';

import { ORDER_HISTORY_DEPS } from './order-history.dependencies';

@Component( {
  selector: 'app-order-history',
  standalone: true,
  imports: [ORDER_HISTORY_DEPS],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
} )
export class OrderHistoryComponent {

}
