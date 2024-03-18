import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AutoCardComponent } from '@components';
import { OrderHistoryCarCard } from '@models';
import { Store } from '@ngrx/store';
import { CarService } from '@services';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars-request-list',
  standalone: true,
  templateUrl: './cars-request.component.html',
  styleUrls: ['./cars-request.component.scss', '../order-history-list/order-history-list.component.scss'],
  imports: [CommonModule, AutoCardComponent, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsRequestComponent implements OnInit {
  public orderedCars$: Observable<OrderHistoryCarCard[]>;

  constructor(
    private store: Store,
    private service: CarService
  ) {}

  ngOnInit(): void {
    this.orderedCars$ = this.service.getOrderHistoryCars(1, 20);
  }
}
