import { ChangeDetectionStrategy, Component, model, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BonusComponent, SpinnerComponent } from '@components';
import { AppRoutes, LoadingTypes, MainRoutes } from '@constants';
import { RentScheduleDirective } from '@directives';
import { CarCard, CarProfile } from '@models';
import { Store } from '@ngrx/store';
import { BreadcrumbService } from '@services';
import { loadCar, selectAutoparkCars, selectCarProfile, selectLoading } from '@store';
import { MenuItem } from 'primeng/api';
import { Observable, Subject, takeUntil } from 'rxjs';

import { RESPONSIVE_OPTIONS } from '../../constants';

import { AUTO_DETAILED_DEPS } from './car-detailed.dependencies';
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: 'app-car-detailed',
  templateUrl: './car-detailed.component.html',
  styleUrls: ['./car-detailed.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AUTO_DETAILED_DEPS, BonusComponent, SpinnerComponent, RentScheduleDirective, DialogModule, InputTextModule],
})
export class CarDetailedComponent implements OnInit, OnDestroy {
  public carProfile$: Observable<CarProfile>;
  public autoparkCars$: Observable<CarCard[]>;
  public isLoading$: Observable<boolean>;

  contactModalVisible = false;

  public readonly responsiveOptions = RESPONSIVE_OPTIONS;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.getQueryParams();
    this.getDataFromStore();
  }

  openRentModal(): void {
    this.contactModalVisible = true;
  }

  private getQueryParams(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const carId = params['id'];
      this.store.dispatch(loadCar({ carId }));
      this.setBreadcrumbs(carId);
    });
  }

  private getDataFromStore(): void {
    this.isLoading$ = this.store.select(selectLoading, { type: LoadingTypes.CAR_DETAILED });
    this.carProfile$ = this.store.select(selectCarProfile);
    this.autoparkCars$ = this.store.select(selectAutoparkCars);
  }

  private setBreadcrumbs(autoId: number): void {
    const breadcrumb: MenuItem = {
      label: 'Автомобиль',
      routerLink: `${AppRoutes.MAIN}/${MainRoutes.AUTO_DETAILED}/${autoId}`,
    };
    this.breadcrumbService.addBreadcrumb(breadcrumb);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
