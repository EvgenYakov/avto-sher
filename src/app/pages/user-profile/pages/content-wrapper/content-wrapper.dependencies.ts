import { CommonModule } from '@angular/common';

import { AutoCardComponent } from '@components';
import { ButtonModule } from 'primeng/button';

import { CarsRequestComponent } from './components/cars-request-list/cars-request.component';
import { OrderHistoryListComponent } from './components/order-history-list';

export const CONTENT_WRAPPER_DEPS = [
  CommonModule,
  AutoCardComponent,
  ButtonModule,
  OrderHistoryListComponent,
  CarsRequestComponent,
];
