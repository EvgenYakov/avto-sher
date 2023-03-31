import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AutoCard } from '@models';
import { AUTO_CARD } from '../auto-card/constants/auto-card.constants';
import { RESPONSIVE_OPTIONS } from './constants/responsive-options.constants';
import { ResponsiveOption } from './interfaces/responsive-option.interface';

@Component({
  selector: 'app-auto-card-detailed',
  templateUrl: './auto-card-detailed.component.html',
  styleUrls: ['./auto-card-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCardDetailedComponent {
  @Input() public autoCard: AutoCard = AUTO_CARD;

  public images: string[] = AUTO_CARD.pathsOfImages;
  public responsiveOptions: ResponsiveOption[] = RESPONSIVE_OPTIONS;
}
