import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

import { AutoCardComponent, CarFilterComponent, LoadMoreComponent, SpinnerComponent } from '@components';

export const CARS_DEPS = [
  AutoCardComponent,
  NgForOf,
  AsyncPipe,
  LoadMoreComponent,
  CarFilterComponent,
  NgIf,
  SpinnerComponent,
];
