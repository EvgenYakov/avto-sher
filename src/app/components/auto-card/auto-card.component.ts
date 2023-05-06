import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AutoCard } from '@models';

@Component({
  selector: 'app-auto-card',
  templateUrl: './auto-card.component.html',
  styleUrls: ['./auto-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCardComponent {
  @Input() public autoCard: AutoCard;
}
