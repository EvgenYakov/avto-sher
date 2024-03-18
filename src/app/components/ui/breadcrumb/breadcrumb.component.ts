import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { navigateToBreadcrumb, selectBreadcrumbs } from '@store';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  imports: [CommonModule, BreadcrumbModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  private store = inject(Store);
  private router = inject(Router);

  public breadcrumbs$: Observable<MenuItem[]> = this.store.select(selectBreadcrumbs);

  public navigateToBreadcrumb(breadcrumb: MenuItem): void {
    this.store.dispatch(navigateToBreadcrumb({ breadcrumb }));
    this.router.navigate([breadcrumb.routerLink]);
  }
}
