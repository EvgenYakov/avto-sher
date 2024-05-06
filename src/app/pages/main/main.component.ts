import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { GlobalLoaderComponent } from '@components';
import { Store } from '@ngrx/store';
import { loadRegions } from '@store';

import { MAIN_DEPS } from './main.dependencies';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [MAIN_DEPS, GlobalLoaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadRegions());
  }
}
