import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { AuctionAutoparkCardComponent, SpinnerComponent } from '@components';
import { FilterComponent } from './components/car-filter/filter.component';

export const START_PAGE_DEPS = [
  NgFor, AuctionAutoparkCardComponent, FilterComponent, NgIf, AsyncPipe, SpinnerComponent,
  FilterComponent
];