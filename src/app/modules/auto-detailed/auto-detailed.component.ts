import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AutoProfile } from '@models';
import { AUTO_CARD } from '../../components/auto-card/constants/auto-card.constants';
import { RESPONSIVE_OPTIONS } from './constants/responsive-options.constants';
import { ResponsiveOption } from './interfaces/responsive-option.interface';

@Component({
  selector: 'app-auto-detailed',
  templateUrl: './auto-detailed.component.html',
  styleUrls: ['./auto-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoDetailedComponent {
  @Input() public autoCard: AutoProfile = AUTO_CARD;

  public images: string[] = AUTO_CARD.pathsOfImages;
  public responsiveOptions: ResponsiveOption[] = RESPONSIVE_OPTIONS;
}
