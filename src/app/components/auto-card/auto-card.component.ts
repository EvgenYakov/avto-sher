import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AutoProfile } from '@models';
import { AUTO_CARD } from './constants/auto-card.constants';

@Component({
  selector: 'app-auto-card',
  templateUrl: './auto-card.component.html',
  styleUrls: ['./auto-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCardComponent {
  @Input() public autoCard: AutoProfile = AUTO_CARD;
}
