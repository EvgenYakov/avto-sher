import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoparkBonus } from '@models';

@Component({
  selector: 'app-bonus',
  standalone: true,
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
  imports: [CommonModule],
})
export class BonusComponent {

  @Input() public bonus: AutoparkBonus;

}
