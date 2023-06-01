import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { AutoCard, AutoparkDetailed, ReviewUser } from '@models';
import { LoadingTypes } from '@constants';
import {
  loadAutoparkDetailed,
  selectAutoparkCars,
  selectAutoparkDetailed,
  selectAutoparkReviews,
  selectLoading
} from '@store';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { ReviewUserCardComponent } from '../../components/review-user-card/review-user-card.component';
import { AutoCardComponent } from '../../components/auto-card/auto-card.component';
import { LoadMoreComponent } from '../../components/load-more/load-more.component';
import { TabViewModule } from 'primeng/tabview';
import { AutoparkHatComponent } from './components/hat/autopark-hat.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-autopark-profile',
    templateUrl: './autopark-detailed.component.html',
    styleUrls: ['./autopark-detailed.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, AutoparkHatComponent, TabViewModule, LoadMoreComponent, NgFor, AutoCardComponent, ReviewUserCardComponent, SpinnerComponent, AsyncPipe]
})
export class AutoparkDetailedComponent implements OnInit, OnDestroy {
  public isLoading: Observable<boolean>;
  public autoparkDetailed$: Observable<AutoparkDetailed>;
  public cars: Observable<AutoCard[]>;
  public reviews: Observable<ReviewUser[]>;

  private destroy$ = new Subject<void>();

  constructor(private store: Store,
              private activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      this.store.dispatch(loadAutoparkDetailed({ autoparkId: params['id'] }));
    })
    this.getDataFromStore();
  }

  private getDataFromStore(): void {
    this.isLoading = this.store.select(selectLoading, { type: LoadingTypes.AUTOPARK_DETAILED });
    this.autoparkDetailed$ = this.store.select(selectAutoparkDetailed);
    this.cars = this.store.select(selectAutoparkCars);
    this.reviews = this.store.select(selectAutoparkReviews);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
