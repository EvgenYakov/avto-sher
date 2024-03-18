import { inject, Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { addBreadcrumb, BreadcrumbsState, selectBreadcrumbs } from '@store';
import { MenuItem } from 'primeng/api';
import { filter, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private store = inject(Store<BreadcrumbsState>);

  public addBreadcrumb(breadcrumb: MenuItem): void {
    this.store
      .select(selectBreadcrumbs)
      .pipe(
        take(1),
        map(breadcrumbs => breadcrumbs.find(b => b.label === breadcrumb.label)),
        filter(existingBreadcrumb => !existingBreadcrumb)
      )
      .subscribe(() => {
        this.store.dispatch(addBreadcrumb({ breadcrumb }));
      });
  }
}
