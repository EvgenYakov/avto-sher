import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RequestStatus } from 'src/app/constants/car-characteristics.constant';

@Component({
  selector: 'app-rent-card',
  templateUrl: './rent-card.component.html',
  styleUrls: ['./rent-card.component.scss'],
  standalone: true,
  imports: [CardModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentCardComponent {
  @Input() public financialInfo: string[];
  @Input() public btnTitle: string;
  @Input() public price: number;
  @Input() public schedule: string;
  @Input() status: RequestStatus;

  @Output() rentEmit = new EventEmitter<void>();

  protected readonly RequestStatus = RequestStatus;

  rent(): void {
    this.rentEmit.emit();
  }
}
