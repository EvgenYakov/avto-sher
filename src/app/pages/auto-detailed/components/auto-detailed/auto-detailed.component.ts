import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AutoProfile } from '@models';
import { RESPONSIVE_OPTIONS } from '../../constants';

import { AUTO_DETAILED_DEPS } from './auto-detailed.dependencies';

@Component( {
  selector: 'app-auto-detailed',
  templateUrl: './auto-detailed.component.html',
  styleUrls: ['./auto-detailed.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AUTO_DETAILED_DEPS]
} )
export class AutoDetailedComponent {
  @Input() public autoCard: AutoProfile;

  public responsiveOptions = RESPONSIVE_OPTIONS;
}
