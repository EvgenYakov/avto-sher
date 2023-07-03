import { AutoCardComponent, LoadMoreComponent } from '@components';
import { AsyncPipe, NgForOf } from '@angular/common';

export const CARS_DEPS = [
  AutoCardComponent, NgForOf, AsyncPipe, LoadMoreComponent
];