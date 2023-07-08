import { AsyncPipe, NgForOf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AutoCardComponent } from '@components';

export const ORDER_HISTORY_DEPS = [
  NgForOf, AsyncPipe, AutoCardComponent, ButtonModule
];