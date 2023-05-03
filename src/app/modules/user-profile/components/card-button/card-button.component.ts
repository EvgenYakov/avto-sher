import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CardButton } from '../../interfaces/card-button.interface';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardButtonComponent {
  @Input() public cardButton: CardButton;
}
