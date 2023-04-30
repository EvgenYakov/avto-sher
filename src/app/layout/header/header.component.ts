import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  MAIN_NAV,
  SECONDARY_NAV,
} from './constants/header-navigation.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isOpen: boolean = false;
  public mainNav = MAIN_NAV;
  public secondNav = SECONDARY_NAV;
}
