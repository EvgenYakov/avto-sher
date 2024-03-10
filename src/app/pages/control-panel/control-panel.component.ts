import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LoadingTypes } from '@constants';
import { AutoparkCard } from '@models';
import { Store } from '@ngrx/store';
import { loadAutoparksByOwner, selectLoading, selectUserAutoparks } from '@store';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { Observable } from 'rxjs';

import { AutoparkFacade } from '../../../store/autopark/autopark.facade';

import { SIDEBAR_CONFIG } from './constants/sidebar-config.constant';
import { SidebarConfig } from './models/sidebar-config.interface';
import { CONTROL_PANEL_DEPS } from './control-panel.dependencies';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  imports: [CONTROL_PANEL_DEPS, DropdownModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanelComponent implements OnInit {
  public sidebarVisible = false;
  public selectedIconIndex: number | null = null;
  public sidebarConfig: SidebarConfig[] = SIDEBAR_CONFIG;

  public autoparks$: Observable<AutoparkCard[]>;
  public isAutoparksLoading$: Observable<boolean>;

  constructor(
    public autoparkFacade: AutoparkFacade,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadAutoparksByOwner());
    this.getDataFromStore();
  }

  public selectIcon(index: number): void {
    this.selectedIconIndex = index;
    this.sidebarVisible = true;
  }

  public selectAutoPark(event: DropdownChangeEvent): void{
    this.autoparkFacade.selectAutoPark(event.value);
  }

  private getDataFromStore(): void {
    this.isAutoparksLoading$ = this.store.select(selectLoading, { type: LoadingTypes.AUTOPARKS });
    this.autoparks$ = this.store.select(selectUserAutoparks);
  }
}
