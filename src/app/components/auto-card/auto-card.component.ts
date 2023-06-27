import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CarCard, OrderHistoryCarCard } from '@models';
import { AppRoutes, MainRoutes } from '@constants';

import { AUTO_CARD_DEPS } from './auto-card.dependencies';

@Component( {
  selector: 'app-car-card',
  templateUrl: './auto-card.component.html',
  styleUrls: ['./auto-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AUTO_CARD_DEPS]
} )
export class AutoCardComponent {
  @Input() public car: CarCard | OrderHistoryCarCard;
  @Input() public buttonLabel: string = 'Арендовать';
  @Input() public anotherCharacteristicContent: boolean = false;

  constructor(
    private router: Router
  ) {}

  public navigateToCarProfile(carId: number): void {
    this.router.navigate( [AppRoutes.MAIN + '/' + MainRoutes.AUTO_DETAILED, carId] )
  }
}