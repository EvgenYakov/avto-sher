import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-rent-card',
  templateUrl: './rent-card.component.html',
  styleUrls: ['./rent-card.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentCardComponent {
  @Input() public financialInfo: string[];
  @Input() public btnTitle: string;
  @Input() public price: number;
  @Input() public schedule: string;
}
