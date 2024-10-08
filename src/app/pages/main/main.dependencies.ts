import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BreadcrumbComponent, FooterComponent, HeaderComponent } from '@components';
import { ToastModule } from 'primeng/toast';

export const MAIN_DEPS = [
  CommonModule,
  FooterComponent,
  HeaderComponent,
  RouterOutlet,
  BreadcrumbComponent,
  ToastModule,
];
