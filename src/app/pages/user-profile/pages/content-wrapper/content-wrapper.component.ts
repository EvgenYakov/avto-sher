import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuItem } from 'primeng/api';

import { BreadcrumbService } from '@services';
import { AppRoutes, MainRoutes } from '@constants';

import { FilterType } from '../../../../components/car-filter/constant/filter-type.enum';
import { CardsType } from '../../../../components/car-filter/constant/cards-type.enum';
import { CONTENT_WRAPPER_DEPS } from './content-wrapper.dependencies';

@Component( {
  selector: 'app-content-wrapper',
  standalone: true,
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss'],
  imports: [CONTENT_WRAPPER_DEPS],
} )
export class ContentWrapperComponent implements OnInit {

  public title: string;
  public filterType: FilterType | null;
  public cardsType: CardsType;

  protected readonly CardsType = CardsType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
  ) {}

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.data['title'];
    this.filterType = this.activatedRoute.snapshot.data['filterType'];
    this.cardsType = this.activatedRoute.snapshot.data['cardsType'];

    this.setBreadcrumbs();
  }

  private setBreadcrumbs(): void {
    const breadcrumb: MenuItem = {
      label: this.title,
      routerLink: `${ AppRoutes.MAIN }/${ MainRoutes.USER_PROFILE }/${ this.cardsType }`
    };
    this.breadcrumbService.addBreadcrumb( breadcrumb );
  }

}
