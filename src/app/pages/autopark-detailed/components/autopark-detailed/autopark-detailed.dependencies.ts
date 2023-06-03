import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { TabViewModule } from 'primeng/tabview';

import { AutoparkHatComponent } from '../hat';
import { AutoCardComponent, LoadMoreComponent, ReviewUserCardComponent, SpinnerComponent } from '@components';

export const AUTOPARK_DETAILED_DEPS = [
  NgIf, AutoparkHatComponent, TabViewModule, LoadMoreComponent,
  NgFor, AutoCardComponent, ReviewUserCardComponent, SpinnerComponent, AsyncPipe
];