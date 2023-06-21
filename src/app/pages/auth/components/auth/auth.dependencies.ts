import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';

import { SpinnerComponent } from '@components';

export const AUTH_DEPS = [
  RouterOutlet, SpinnerComponent, AsyncPipe, NgIf
];