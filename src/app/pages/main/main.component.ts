import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { loadAuctionAutoparksByRegion, loadAutoparkRegions } from '@store';

import { MAIN_DEPS } from './main.dependencies';
import { BreadcrumbComponent } from '@components';

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [MAIN_DEPS, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class MainComponent implements OnInit {
  private store = inject( Store );

  ngOnInit(): void {
    this.store.dispatch( loadAutoparkRegions() );
    this.store.dispatch( loadAuctionAutoparksByRegion( { regionId: 1 } ) )
  }

}
