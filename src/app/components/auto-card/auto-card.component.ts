import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes, MainRoutes } from '@constants';
import { CarCard, OrderHistoryCarCard } from '@models';

import { AUTO_CARD_DEPS } from './auto-card.dependencies';

@Component({
  selector: 'app-car-card',
  templateUrl: './auto-card.component.html',
  styleUrls: ['./auto-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AUTO_CARD_DEPS],
})
export class AutoCardComponent {
  readonly car = input.required<CarCard | OrderHistoryCarCard>();
  readonly buttonLabel = input<string>('Арендовать');
  readonly anotherCharacteristicContent = input<boolean>(false);

  constructor(private router: Router) {}

  public handleImageClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  public navigateToCarProfile(carId: number): void {
    this.router.navigate([AppRoutes.MAIN + '/' + MainRoutes.AUTO_DETAILED, carId]);
  }

  navigateToAutopark($event: Event): void {
    $event.stopPropagation();
    this.router.navigate([AppRoutes.MAIN + '/' + MainRoutes.AUTOPARK_DETAILED, this.car().id]);
  }
}
