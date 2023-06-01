import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CardButton } from '../../interfaces/card-button.interface';
import { NgClass } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-card-button',
    templateUrl: './card-button.component.html',
    styleUrls: ['./card-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CardModule, NgClass]
})
export class CardButtonComponent {
  @Input() public cardButton: CardButton;
}
