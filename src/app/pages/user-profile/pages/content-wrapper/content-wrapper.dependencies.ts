import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AutoCardComponent } from '@components';

import { SidenavFilterComponent } from './components/sidenav-filter/sidenav-filter.component';
import { OrderHistoryListComponent } from './components/order-history-list';
import { CarsRequestComponent } from './components/cars-request-list/cars-request.component';

export const CONTENT_WRAPPER_DEPS = [
  CommonModule, AutoCardComponent, ButtonModule, SidenavFilterComponent, OrderHistoryListComponent, CarsRequestComponent
];