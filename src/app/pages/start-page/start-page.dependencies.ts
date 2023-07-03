import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { AuctionAutoparkCardComponent, SpinnerComponent } from '@components';
import { CarFilterComponent } from './components/car-filter/car-filter.component';

export const START_PAGE_DEPS = [
  NgFor, AuctionAutoparkCardComponent, CarFilterComponent, NgIf, AsyncPipe, SpinnerComponent
];