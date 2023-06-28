import { AsyncPipe, NgForOf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AutoCardComponent } from '@components';
import { SidenavFilterComponent } from '../sidenav-filter/sidenav-filter.component';

export const ORDER_HISTORY_DEPS = [
  SidenavFilterComponent, NgForOf, AsyncPipe, AutoCardComponent, ButtonModule
];