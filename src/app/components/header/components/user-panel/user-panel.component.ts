import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes, LoadingTypes } from '@constants';
import { USER_PANEL_DEPS } from './user-panel.dependencies';

import { MainRoutes } from '@pages';
import { selectIsLoggedIn, selectLoading } from '@store';
import { Store } from '@ngrx/store';

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

  public isLoading = this.store.select( selectLoading, { type: LoadingTypes.AUTH } );
  public isAuthorized = this.store.select( selectIsLoggedIn );

  protected readonly MainRoutes = MainRoutes;

  public navigateToAuth(): void {
    this.router.navigate( ['/' + AppRoutes.AUTH] )
  }

}
