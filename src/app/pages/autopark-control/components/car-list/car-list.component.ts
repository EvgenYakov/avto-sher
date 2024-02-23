import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomTableComponent } from '@components';
import { AppRoutes, ControlPanel } from '@constants';
import { CarCard } from '@models';
import { CarService } from '@services';
import { TableModule } from 'primeng/table';
import { map, Observable } from 'rxjs';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-car-list',
  standalone: true,
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

  public cars$: Observable<CarCard[]>;

  constructor(
    private router: Router,
    private service: CarService
  ) {}

  ngOnInit(): void {
    this.cars$ = this.service.getAllCars('Москва', 1, 20).pipe(map(response => response.data));
    this.cars$.subscribe(console.log);
  }

  public navigateToCreateCar(): void {
    this.router.navigate([
      '/' + AppRoutes.CONTROL_PANEL + '/' + ControlPanel.AUTOPARK_CONTROL + '/' + ControlPanel.CREATE_CAR,
    ]);
  }
}
