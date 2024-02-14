import { AsyncPipe, NgForOf } from '@angular/common';

import { AutoCardComponent } from '@components';
import { ButtonModule } from 'primeng/button';

export const ORDER_HISTORY_DEPS = [NgForOf, AsyncPipe, AutoCardComponent, ButtonModule];
