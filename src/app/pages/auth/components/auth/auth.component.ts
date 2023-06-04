import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AUTH_DEPS } from './auth.dependencies';
import { Store } from '@ngrx/store';
import { selectLoading } from '@store';
import { LoadingTypes } from '@constants';

@Component( {
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AUTH_DEPS]
} )
export class AuthComponent {

  private store = inject(Store);

  public isLoading$ = this.store.select(selectLoading, {type: LoadingTypes.AUTH})
}
