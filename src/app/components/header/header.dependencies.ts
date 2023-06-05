import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';

import { UserPanelComponent } from './components';

export const HEADER_CARD_DEPS = [
  UserPanelComponent, SidebarModule, NgFor, RouterLink, AsyncPipe, DropdownModule, FormsModule, NgIf
];