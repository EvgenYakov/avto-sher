import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from '@constants';
import { USER_PANEL_DEPS } from './user-panel.dependencies';

@Component( {
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [USER_PANEL_DEPS]
} )
export class UserPanelComponent {
  public isAuthorized: boolean = false;

  private router = inject( Router );

  public navigateToAuth(): void {
    this.router.navigate( ['/' + AppRoutes.AUTH] )
  }
}
