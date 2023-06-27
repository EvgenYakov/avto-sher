import { Component } from '@angular/core';

import { ORDER_HISTORY_DEPS } from './order-history.dependencies';
import { HistoryFilterComponent } from './components/history-filter/history-filter.component';

@Component( {
  selector: 'app-order-history',
  standalone: true,
  imports: [ORDER_HISTORY_DEPS, HistoryFilterComponent],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
} )
export class OrderHistoryComponent {

}
