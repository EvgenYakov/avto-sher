import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { MAIN_NAV, SECONDARY_NAV, } from './constants';
import { HEADER_CARD_DEPS } from './header.dependencies';

import { AppRoutes } from '@constants';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HEADER_CARD_DEPS]
} )
export class HeaderComponent {
  public isOpen: boolean = false;
  public mainNav = MAIN_NAV;
  public secondNav = SECONDARY_NAV;

  constructor(private router: Router) {}

  public navigateToMain(): void {
    this.router.navigate( ['/' + AppRoutes.MAIN] );
  }
}
