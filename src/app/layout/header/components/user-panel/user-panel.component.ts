import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AppRoutes } from '@constants';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPanelComponent {
  public isAuthorized: boolean = false;
  public readonly authLink: AppRoutes = AppRoutes.AUTH;
}
