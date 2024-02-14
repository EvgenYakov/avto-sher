import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { LoadingTypes } from '@constants';
import { AutoparkCard } from '@models';
import { Store } from '@ngrx/store';
import { loadAutoparksByOwner, selectLoading, selectUserAutoparks } from '@store';
import { DropdownModule } from 'primeng/dropdown';
import { Observable } from 'rxjs';

import { SIDEBAR_CONFIG } from './constants/sidebar-config.constant';
import { SidebarConfig } from './models/sidebar-config.interface';
import { CONTROL_PANEL_DEPS } from './control-panel.dependencies';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  imports: [CONTROL_PANEL_DEPS, DropdownModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanelComponent implements OnInit {
  public sidebarVisible = false;
  public selectedIconIndex: number | null = null;
  public sidebarConfig: SidebarConfig[] = SIDEBAR_CONFIG;

  public autoparks$: Observable<AutoparkCard[]>;
  public isAutoparksLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadAutoparksByOwner());
    this.getDataFromStore();
  }

  public selectIcon(index: number): void {
    this.selectedIconIndex = index;
    this.sidebarVisible = true;
  }

  private getDataFromStore(): void {
    this.isAutoparksLoading$ = this.store.select(selectLoading, { type: LoadingTypes.AUTOPARKS });
    this.autoparks$ = this.store.select(selectUserAutoparks);
  }
}
