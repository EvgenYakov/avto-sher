import { AsyncPipe, NgForOf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AutoCardComponent } from '@components';
import { HistoryFilterComponent } from './components/history-filter/history-filter.component';

export const ORDER_HISTORY_DEPS = [
  HistoryFilterComponent, NgForOf, AsyncPipe, AutoCardComponent, ButtonModule
];