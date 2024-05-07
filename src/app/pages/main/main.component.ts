import { ChangeDetectionStrategy, Component, computed, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { GlobalLoaderComponent } from '@components';
import { Store } from '@ngrx/store';
import { loadRegions, selectBreadcrumbs } from '@store';

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
  public breadcrumbs = toSignal(this.store.select(selectBreadcrumbs));
  public breadcrumbsTitleList = computed(() => {
    return this.breadcrumbs()?.map(item => item.label);
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadRegions());
  }
}
