import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CarCard } from '@models';

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
  @Input() public car: CarCard;
}