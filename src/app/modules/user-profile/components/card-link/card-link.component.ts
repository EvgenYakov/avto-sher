import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CardLink } from '../../interfaces/card-link.interface';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';

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
