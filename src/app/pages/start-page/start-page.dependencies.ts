import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { AuctionAutoparkCardComponent, AutoFilterComponent, SpinnerComponent } from '@components';

export const START_PAGE_DEPS = [
  NgFor, AuctionAutoparkCardComponent, AutoFilterComponent, NgIf, AsyncPipe, SpinnerComponent
];