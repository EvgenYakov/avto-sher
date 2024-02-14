import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AutoparkBonus } from '@models';

@Component({
  selector: 'app-bonus',
  standalone: true,
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BonusComponent {
  @Input() public bonus: AutoparkBonus;
}
