import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CardLink } from '../../interfaces/card-link.interface';

@Component({
  selector: 'app-card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLinkComponent {
  @Input() public cardLink: CardLink;
  @Input() public cardLinkCounter: number;
}
