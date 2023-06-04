import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MAIN_NAV, SECONDARY_NAV, } from './constants';

import { AppRoutes } from '@constants';

import { HEADER_CARD_DEPS } from './header.dependencies';

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

  protected readonly MAIN_NAV = MAIN_NAV;
  protected readonly SECONDARY_NAV = SECONDARY_NAV;

  private router = inject( Router );

  public navigateToMain(): void {
    this.router.navigate( ['/' + AppRoutes.MAIN] );
  }

}
