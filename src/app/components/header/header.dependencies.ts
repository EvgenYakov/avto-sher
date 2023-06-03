import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { UserPanelComponent } from './components';
import { SidebarModule } from 'primeng/sidebar';

export const HEADER_CARD_DEPS = [UserPanelComponent, SidebarModule, NgFor, RouterLink];