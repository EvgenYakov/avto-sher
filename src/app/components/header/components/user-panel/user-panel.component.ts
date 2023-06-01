import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AppRoutes } from '@constants';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, RouterLink]
})
export class UserPanelComponent {
  public isAuthorized: boolean = false;
  public readonly authLink: AppRoutes = AppRoutes.AUTH;
}
