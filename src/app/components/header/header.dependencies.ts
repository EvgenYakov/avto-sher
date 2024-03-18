import { AsyncPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';

import { UserPanelComponent } from './components';

export const HEADER_CARD_DEPS = [
  UserPanelComponent,
  SidebarModule,
  NgFor,
  RouterLink,
  AsyncPipe,
  DropdownModule,
  FormsModule,
  NgIf,
  NgStyle,
  NgClass,
  ReactiveFormsModule,
];
