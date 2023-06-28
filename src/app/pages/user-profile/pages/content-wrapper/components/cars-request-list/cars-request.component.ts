import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCardComponent } from '@components';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { OrderHistoryCarCard } from '@models';
import { Store } from '@ngrx/store';
import { CarService } from '@services';

@Component({
  selector: 'app-cars-request-list',
  standalone: true,
  templateUrl: './cars-request.component.html',
  styleUrls: ['./cars-request.component.scss', '../order-history-list/order-history-list.component.scss'],
  imports: [CommonModule, AutoCardComponent, ButtonModule],
})
export class CarsRequestComponent {
  public orderedCars$: Observable<OrderHistoryCarCard[]>;

  constructor(
    private store: Store,
    private service: CarService,
  ) {}

  ngOnInit(): void {
    this.orderedCars$ = this.service.getOrderHistoryCars( 1,20 );
  }
}
