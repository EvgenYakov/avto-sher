import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { map, Observable } from 'rxjs';
import { TableModule } from 'primeng/table';

import { CarCard } from '@models';
import { AppRoutes, ControlPanel } from '@constants';
import { CustomTableComponent } from '@components';
import { CarService } from '@services';

@Component( {
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, TableModule, CustomTableComponent],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
} )
export class CarListComponent implements OnInit {

  public readonly columnNames = {
    'status': 'статус',
    'brand': 'марка',
    'model': 'модель',
    'yearOfRelease': 'год',
    'price': 'цена',
    'vin': 'VIN',
    'number': 'гос номер',
    'sts': 'СТС'
  }

  public cars$: Observable<CarCard[]>;

  constructor(
    private router: Router,
    private service: CarService
  ) {}

  ngOnInit(): void {
    this.cars$ = this.service.getAllCars( 'Москва', 1, 20 ).pipe(
      map( (response) => response.data )
    );
    this.cars$.subscribe( console.log )
  }

  public navigateToCreateCar(): void {
    this.router.navigate( ['/' + AppRoutes.AUTOPARK_PANEL + '/' + ControlPanel.AUTOPARK_CONTROL + '/' + ControlPanel.CREATE_CAR] )
  }

}
