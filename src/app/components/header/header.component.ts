import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AppRoutes, LocalStorageKeys, MainRoutes, UserRole } from '@constants';
import { DestroyDirective } from '@directives';
import { Region } from '@models';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '@services';
import { selectListOfRegion, setCurrentRegion } from '@store';
import { MenuItem } from 'primeng/api';
import { takeUntil, tap } from 'rxjs';

import { UserFacade } from '../../../store/user/user.facade';

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
  regions = signal<Region[]>([]);
  readonly mainNavList = signal<MenuItem[]>(MAIN_NAV);

  public selectedRegionControl: FormControl<Region | null> = new FormControl<Region | null>(null);
  public isOpen: boolean = false;

  readonly SECONDARY_NAV = SECONDARY_NAV;
  readonly AppRoutes = AppRoutes;
  readonly MainRoutes = MainRoutes;

  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    public userFacade: UserFacade,
    private store: Store,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const region = this.localStorageService.getItemFromStorage(LocalStorageKeys.REGION);

    this.selectedRegionControl.setValue(region ?? null);

    this.userFacade.userProfile$
      .pipe(
        tap(user => {
          if (user.role === UserRole.OWNER || user.role == UserRole.OPERATOR) {
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
    this.store
      .select(selectListOfRegion)
      .pipe(takeUntil(this.destroy$))
      .subscribe(regions => {
        if (regions) {
          if (!this.localStorageService.getItemFromStorage(LocalStorageKeys.REGION)) {
            this.selectedRegionControl.setValue(regions[0]);
            this.store.dispatch(setCurrentRegion({ region: regions[0] }));
          }
          this.regions.set(regions);
        }
      });
  }
}
