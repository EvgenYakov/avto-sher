import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

import { LocalStorageKeys, UserRole } from '@constants';
import { Region } from '@models';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '@services';
import { selectListOfRegion, setCurrentRegion } from '@store';
import { MenuItem } from 'primeng/api';
import { Observable, takeUntil, tap } from 'rxjs';

import { UserFacade } from '../../../store/user/user.facade';
import { DestroyDirective } from '../../directives/destroy.directive';

import { MAIN_NAV, OWNER_PANEL_LINK, SECONDARY_NAV } from './constants';
import { HEADER_CARD_DEPS } from './header.dependencies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
  standalone: true,
  imports: [HEADER_CARD_DEPS],
})
export class HeaderComponent implements OnInit {
  constructor(
    public userFacade: UserFacade,
    private store: Store,
    private localStorageService: LocalStorageService
  ) {}

  public regions$: Observable<Region[]>;

  public selectedRegionControl: FormControl<Region | null>;
  public isOpen: boolean = false;

  public readonly mainNavList = signal<MenuItem[]>(MAIN_NAV);

  protected readonly SECONDARY_NAV = SECONDARY_NAV;

  private destroy$ = inject(DestroyDirective).destroy$;

  ngOnInit(): void {
    const region = this.localStorageService.getItemFromStorage(LocalStorageKeys.REGION);
    this.selectedRegionControl = new FormControl<Region | null>(region);

    this.userFacade.userProfile$
      .pipe(
        tap(user => {
          if (user.role === UserRole.OWNER) {
            this.mainNavList.update(navList => [...navList, OWNER_PANEL_LINK]);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    if (region) {
      this.store.dispatch(setCurrentRegion({ region }));
    }

    this.getDataFromStore();

    this.selectedRegionControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(region => {
      if (region) {
        this.store.dispatch(setCurrentRegion({ region }));
      }
    });
  }

  private getDataFromStore(): void {
    this.regions$ = this.store.select(selectListOfRegion);
  }
}
