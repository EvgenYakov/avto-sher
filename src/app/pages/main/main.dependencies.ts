import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FooterComponent, HeaderComponent } from '@components';

export const MAIN_DEPS = [
  CommonModule, FooterComponent, HeaderComponent, RouterOutlet
];