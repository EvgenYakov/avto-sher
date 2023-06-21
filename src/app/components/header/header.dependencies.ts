import { AsyncPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';

import { UserPanelComponent } from './components';

export const HEADER_CARD_DEPS = [
  UserPanelComponent, SidebarModule, NgFor, RouterLink, AsyncPipe, DropdownModule, FormsModule, NgIf,
  NgStyle, NgClass, ReactiveFormsModule
];