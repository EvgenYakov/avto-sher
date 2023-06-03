import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { AppRoutes } from '@constants';
import { USER_PANEL_DEPS } from './user-panel.dependencies';
import { selectIsLoggedIn } from '@store';

import { MainRoutes } from '@pages';

@Component( {
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [USER_PANEL_DEPS]
} )
export class UserPanelComponent {
  private router = inject( Router );
  private store = inject( Store );

  public isAuthorized = this.store.select( selectIsLoggedIn );

  public navigateToAuth(): void {
    this.router.navigate( ['/' + AppRoutes.AUTH] )
  }

  protected readonly MainRoutes = MainRoutes;
  protected readonly AppRoutes = AppRoutes;
}
