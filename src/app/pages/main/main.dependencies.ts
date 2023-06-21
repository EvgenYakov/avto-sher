import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent, FooterComponent, HeaderComponent } from '@components';

export const MAIN_DEPS = [
  CommonModule, FooterComponent, HeaderComponent, RouterOutlet, BreadcrumbComponent
];