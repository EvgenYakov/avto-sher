import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { AppRoutes } from '@constants';
import { selectAutoparksRegions } from '@store';

import { MAIN_NAV, SECONDARY_NAV, } from './constants';

import { HEADER_CARD_DEPS } from './header.dependencies';
import { AsyncPipe, NgIf } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HEADER_CARD_DEPS, AsyncPipe, DropdownModule, FormsModule, NgIf]
} )
export class HeaderComponent {

  private router = inject( Router );
  private store = inject( Store );

  public regions$ = this.store.select( selectAutoparksRegions );

  public isOpen: boolean = false;

  protected readonly MAIN_NAV = MAIN_NAV;
  protected readonly SECONDARY_NAV = SECONDARY_NAV;
  selectedRegions: any;

  public navigateToMain(): void {
    this.router.navigate( ['/' + AppRoutes.MAIN] );
  }

}
