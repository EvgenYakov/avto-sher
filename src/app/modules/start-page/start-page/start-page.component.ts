import { ChangeDetectionStrategy, Component } from '@angular/core';
import { checkedAutoparksCards, newAutoparksCards, topAutoparksCards } from '@test-data';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartPageComponent {

  public topAutoparksCard = topAutoparksCards;
  public checkedAutoparksCard = checkedAutoparksCards;
  public newAutoparksCard = newAutoparksCards;

  protected readonly newAutoparksCards = newAutoparksCards;
}
