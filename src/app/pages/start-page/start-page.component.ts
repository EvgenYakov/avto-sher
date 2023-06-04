import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { checkedAutoparksCards, newAutoparksCards, topAutoparksCards } from '@test-data';
import { START_PAGE_DEPS } from './start-page.dependencies';
import { Store } from '@ngrx/store';
import { loadAutoparkRegions, selectAutoparksRegions } from '@store';

@Component( {
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  standalone: true,
  imports: [START_PAGE_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class StartPageComponent implements OnInit {

  private store = inject( Store );

  public topAutoparksCard = topAutoparksCards;
  public checkedAutoparksCard = checkedAutoparksCards;
  public newAutoparksCard = newAutoparksCards;


  ngOnInit(): void {
    this.store.dispatch( loadAutoparkRegions() );
  }


}
