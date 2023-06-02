import { ChangeDetectionStrategy, Component } from '@angular/core';

import { checkedAutoparksCards, newAutoparksCards, topAutoparksCards } from '@test-data';
import { START_PAGE_DEPS } from './start-page.dependencies';

@Component( {
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  standalone: true,
  imports: [START_PAGE_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class StartPageComponent {

  public topAutoparksCard = topAutoparksCards;
  public checkedAutoparksCard = checkedAutoparksCards;
  public newAutoparksCard = newAutoparksCards;

  protected readonly newAutoparksCards = newAutoparksCards;
}
