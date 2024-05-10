import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { CustomTableComponent } from '@components';
import { AppRoutes, ControlPanel } from '@constants';
import { DestroyDirective } from '@directives';
import { CarCard } from '@models';
import { AutoparkFacade } from '@store';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { takeUntil, tap } from 'rxjs';

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
  public activeAutoPark = toSignal(this.autoparkFacade.activeAutopark$);

  public showLoadMoreButton = signal<boolean>(true);
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private router: Router,
    private autoparkFacade: AutoparkFacade
  ) {
    effect(
      () => {
        const park = this.activeAutoPark();
        if (park) {
          this.autoparkFacade.loadAutoparkCars(park?.id);
        }
      },
      {
        allowSignalWrites: true,
      }
    );
  }

  ngOnInit(): void {
    this.autoparkFacade.autoParkCars$
      .pipe(
        tap(cars => {
          console.log(cars);
          this.carList.update(list => [...list, ...cars]);
          if (cars.length < 5) {
            this.showLoadMoreButton.set(false);
            return;
          }
          this.showLoadMoreButton.set(true);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  loadMoreCars(): void {
    this.autoparkFacade.loadMoreAutoparkCars();
    const park = this.activeAutoPark();
    if (park) {
      this.autoparkFacade.loadAutoparkCars(park?.id);
    }
  }

  public navigateToCreateCar(): void {
    this.router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CREATE_CAR]);
  }

  public navigateToEditCar(carId: string): void {
    console.log(carId);
    this.router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CAR_EDITOR, carId]);
  }
}
