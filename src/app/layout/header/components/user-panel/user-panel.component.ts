import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppRoutes } from '@constants';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsLoggedIn } from '@store';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPanelComponent implements OnInit{
  public isAuthorized: Observable<boolean>;
  public readonly authLink: AppRoutes = AppRoutes.AUTH;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isAuthorized = this.store.select(selectIsLoggedIn);
  }
}
