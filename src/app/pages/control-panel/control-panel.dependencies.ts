import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { SidebarModule } from 'primeng/sidebar';

export const CONTROL_PANEL_DEPS = [CommonModule, SidebarModule, RouterOutlet];
