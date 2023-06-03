import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AutoparkCard } from '@models';
import { AppRoutes } from '@constants';
import { AUTOPARK_CARD_DEPS } from './autopark-card.dependencies';
import { MainRoutes } from '../../pages/main';

@Component({
    selector: 'app-autopark-card',
    templateUrl: './autopark-card.component.html',
    styleUrls: ['./autopark-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [AUTOPARK_CARD_DEPS]
})
export class AutoparkCardComponent {

  @Input() public card: AutoparkCard;

  constructor(private router: Router) {}

  public navigate(id: number) {
    this.router.navigate([`${AppRoutes.MAIN}/${MainRoutes.AUTOPARK_DETAILED}`, id])
  }
}
