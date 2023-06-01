import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AutoCard } from '@models';
import { AUTO_CARD_DEPS } from './auto-card.dependencies';

@Component({
    selector: 'app-auto-card',
    templateUrl: './auto-card.component.html',
    styleUrls: ['./auto-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [AUTO_CARD_DEPS]
})
export class AutoCardComponent {
  @Input() public autoCard: AutoCard;
}
