import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { AutoCardComponent, LoadMoreComponent, ReviewUserCardComponent, SpinnerComponent } from '@components';
import { TabViewModule } from 'primeng/tabview';

import { AutoparkHatComponent } from '../hat';

export const AUTOPARK_DETAILED_DEPS = [
  NgIf,
  AutoparkHatComponent,
  TabViewModule,
  LoadMoreComponent,
  NgFor,
  AutoCardComponent,
  ReviewUserCardComponent,
  SpinnerComponent,
  AsyncPipe,
];
