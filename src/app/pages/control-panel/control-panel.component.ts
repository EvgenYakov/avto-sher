import { Component } from '@angular/core';

import { SIDEBAR_CONFIG } from './constants/sidebar-config.constant';
import { CONTROL_PANEL_DEPS } from './control-panel.dependencies';
import { SidebarConfig } from './models/sidebar-config.interface';

@Component( {
  selector: 'app-control-panel',
  standalone: true,
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  imports: [CONTROL_PANEL_DEPS],
} )
export class ControlPanelComponent {
  public sidebarVisible = false;
  public selectedIconIndex: number | null = null;
  public sidebarConfig: SidebarConfig[] = SIDEBAR_CONFIG;

  public selectIcon(index: number): void {
    this.selectedIconIndex = index;
    this.sidebarVisible = true;
  }
}
