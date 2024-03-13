import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { CustomTableComponent } from '@components';
import { AppRoutes, ControlPanel } from '@constants';
import { CarCard } from '@models';
import { CarService } from '@services';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { takeUntil, tap } from 'rxjs';

import { AutoparkFacade } from '@store';
import { DestroyDirective } from '@directives';

@Component({
  selector: 'app-car-list',
  standalone: true,
  hostDirectives: [DestroyDirective],
  imports: [CommonModule, TableModule, CustomTableComponent, ButtonModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarListComponent implements OnInit {
  public readonly columnNames = {
    status: 'статус',
    brand: 'марка',
    model: 'модель',
    yearOfRelease: 'год',
    price: 'цена',
    vin: 'VIN',
    number: 'гос номер',
    sts: 'СТС',
  };

  public carList = signal<CarCard[]>([]);

  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private router: Router,
    private autoparkFacade: AutoparkFacade,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.autoparkFacade.autoParkCars$
      .pipe(
        tap(cars => {
          this.carList.set(cars);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.autoparkFacade.activeAutopark$
      .pipe(
        tap(park => {
          console.log(park);
          if (park) {
            this.autoparkFacade.loadAutoparkCars(park?.id);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public navigateToCreateCar(): void {
    this.router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CREATE_CAR]);
  }

  public navigateToEditCar(carId: string): void {
    console.log(carId);
    this.router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CAR_EDITOR, carId]);
  }
}
