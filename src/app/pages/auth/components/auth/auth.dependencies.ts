import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '@components';
import { AsyncPipe, NgIf } from '@angular/common';

export const AUTH_DEPS = [
  RouterOutlet, SpinnerComponent, AsyncPipe, NgIf
];