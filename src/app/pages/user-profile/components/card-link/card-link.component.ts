import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CardModule } from 'primeng/card';

import { CardLink } from '../../interfaces';

@Component({
    selector: 'app-card-link',
    templateUrl: './card-link.component.html',
    styleUrls: ['./card-link.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CardModule, RouterLink]
})
export class CardLinkComponent {
  @Input() public cardLink: CardLink;
  @Input() public cardLinkCounter: number;
}
