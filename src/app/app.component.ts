import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCars } from '@store';
import { loadCar } from '@store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store
  ) {
  }

  public ngOnInit(): void {
    this.store.dispatch(loadCars({ autoparkId: 1 }));
    this.store.dispatch(loadCar({ carId: 1 }));
  }

}
