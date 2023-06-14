import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

import { Observable } from 'rxjs';

import { navigateToBreadcrumb, selectBreadcrumbs } from '@store';

@Component( {
  selector: 'app-breadcrumb',
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  imports: [CommonModule, BreadcrumbModule],
} )
export class BreadcrumbComponent {

  private store = inject( Store );
  private router = inject( Router );

  public breadcrumbs$: Observable<MenuItem[]> = this.store.select( selectBreadcrumbs );

  public navigateToBreadcrumb(breadcrumb: MenuItem): void {
    this.store.dispatch( navigateToBreadcrumb( { breadcrumb } ) );
    this.router.navigate( [breadcrumb.routerLink] );
  }

}
