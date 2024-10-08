import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AppRoutes, LoadingTypes, UserRole } from '@constants';
import { DestroyDirective } from '@directives';
import { AutoparkCard } from '@models';
import { Store } from '@ngrx/store';
import {
  AutoparkFacade,
  loadAutoparksByOwner,
  loadAutoparksByOwnerSuccess,
  selectLoading,
  selectUserAutoparks,
} from '@store';
import { ButtonModule } from 'primeng/button';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { Observable, takeUntil, tap } from 'rxjs';

import { UserFacade } from '../../../../store/user/user.facade';

import { SIDEBAR_CONFIG } from './constants/sidebar-config.constant';
import { SidebarConfig } from './models/sidebar-config.interface';
import { CONTROL_PANEL_DEPS } from './control-panel.dependencies';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  standalone: true,
  hostDirectives: [DestroyDirective],
  imports: [CONTROL_PANEL_DEPS, DropdownModule, RouterLink, FormsModule, ReactiveFormsModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanelComponent implements OnInit {
  public sidebarVisible = false;
  public selectedIconIndex: number | null = null;
  public sidebarConfig: SidebarConfig[] = SIDEBAR_CONFIG;
  public autoParkControl = new FormControl<AutoparkCard | null>(null);

  public autoparks$: Observable<AutoparkCard[]>;
  public isAutoparksLoading$: Observable<boolean>;

  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    public autoparkFacade: AutoparkFacade,
    public userFacade: UserFacade,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getDataFromStore();

    this.userFacade.userProfile$
      .pipe(
        tap(profile => {
          console.log(profile);
          if (profile.role === UserRole.OPERATOR && profile.autopark) {
            console.log('hello');
            this.autoparkFacade.selectAutoPark(profile.autopark);
            this.store.dispatch(loadAutoparksByOwnerSuccess({ autoparks: [profile.autopark] }));
            this.autoParkControl.disable();
          }
          if (profile.role === UserRole.OWNER) {
            this.store.dispatch(loadAutoparksByOwner());
          }
        })
      )
      .subscribe();

    this.autoparkFacade.activeAutopark$.pipe(takeUntil(this.destroy$)).subscribe(park => {
      this.autoParkControl.setValue(park);
    });
  }

  public selectIcon(index: number): void {
    this.selectedIconIndex = index;
    this.sidebarVisible = true;
  }

  public selectAutoPark(event: DropdownChangeEvent): void {
    this.autoparkFacade.selectAutoPark(event.value);
  }

  private getDataFromStore(): void {
    this.isAutoparksLoading$ = this.store.select(selectLoading, { type: LoadingTypes.AUTOPARKS });
    this.autoparks$ = this.store.select(selectUserAutoparks);
  }

  protected readonly AppRoutes = AppRoutes;
}
