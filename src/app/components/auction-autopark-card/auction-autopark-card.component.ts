import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AuctionAutoparkCard, AutoparkCard } from '@models';

import { AUTOPARK_CARD_DEPS } from './auction-autopark-card.dependencies';

@Component({
  selector: 'app-auction-autopark-card',
  templateUrl: './auction-autopark-card.component.html',
  styleUrls: ['./auction-autopark-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AUTOPARK_CARD_DEPS],
})
export class AuctionAutoparkCardComponent {
  @Input() public card: AutoparkCard;
}
