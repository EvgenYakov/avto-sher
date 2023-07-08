import { AutoCardComponent, CarFilterComponent, LoadMoreComponent, SpinnerComponent } from '@components';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

export const CARS_DEPS = [
  AutoCardComponent, NgForOf, AsyncPipe, LoadMoreComponent, CarFilterComponent, NgIf, SpinnerComponent
];