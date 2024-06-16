import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AppRoutes, LoadingTypes } from '@constants';
import { Store } from '@ngrx/store';
import { selectLoading } from '@store';

import { AUTH_DEPS } from './auth.dependencies';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AUTH_DEPS, RouterLink],
})
export class AuthComponent {
  private store = inject(Store);

  public isLoading$ = this.store.select(selectLoading, { type: LoadingTypes.AUTH });
  protected readonly AppRoutes = AppRoutes;
}
