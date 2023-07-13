import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { SIDEBAR_CONFIG } from './constants/sidebar-config.constant';
import { CONTROL_PANEL_DEPS } from './control-panel.dependencies';
import { SidebarConfig } from './models/sidebar-config.interface';
import { Title } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';

@Component( {
  selector: 'app-control-panel',
  standalone: true,
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  imports: [CONTROL_PANEL_DEPS, DropdownModule],
} )
export class ControlPanelComponent implements OnInit {
  public sidebarVisible = false;
  public selectedIconIndex: number | null = null;
  public sidebarConfig: SidebarConfig[] = SIDEBAR_CONFIG;


  ngOnInit() {
  }

  public selectIcon(index: number): void {
    this.selectedIconIndex = index;
    this.sidebarVisible = true;
  }
}
