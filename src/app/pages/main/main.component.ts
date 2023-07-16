import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { MessageService } from 'primeng/api';

import { getMe, loadRegions } from '@store';

import { LocalStorageKeys } from '@constants';
import { LocalStorageService } from '@services';

import { MAIN_DEPS } from './main.dependencies';

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [MAIN_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class MainComponent implements OnInit {

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch( loadRegions() );
  }

}
