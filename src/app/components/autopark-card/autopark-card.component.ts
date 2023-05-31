import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AutoparkCard } from '@models';

@Component({
  selector: 'app-autopark-card',
  templateUrl: './autopark-card.component.html',
  styleUrls: ['./autopark-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoparkCardComponent {

  @Input() public card: AutoparkCard;
}
