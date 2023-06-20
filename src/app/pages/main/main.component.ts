import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { loadAutoparkRegions } from '@store';

import { MAIN_DEPS } from './main.dependencies';

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [MAIN_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class MainComponent implements OnInit {
  private store = inject( Store );

  ngOnInit(): void {
    this.store.dispatch( loadAutoparkRegions() );
  }

}
