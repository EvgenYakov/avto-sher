import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarModule } from 'primeng/sidebar';

import { HeaderComponent } from './header.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';

@NgModule({
  declarations: [HeaderComponent, UserPanelComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterModule, SidebarModule],
})
export class HeaderModule {}
