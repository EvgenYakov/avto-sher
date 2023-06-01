import { ChangeDetectionStrategy, Component } from '@angular/core';
import { checkedAutoparksCards, newAutoparksCards, topAutoparksCards } from '@test-data';
import { AutoFilterComponent } from '../../../components/auto-filter/auto-filter.component';
import { AutoparkCardComponent } from '../../../components/autopark-card/autopark-card.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, AutoparkCardComponent, AutoFilterComponent]
})
export class StartPageComponent {

  public topAutoparksCard = topAutoparksCards;
  public checkedAutoparksCard = checkedAutoparksCards;
  public newAutoparksCard = newAutoparksCards;

  protected readonly newAutoparksCards = newAutoparksCards;
}
