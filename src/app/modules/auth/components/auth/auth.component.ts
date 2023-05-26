import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectAuthErrors, selectLoading } from '@store';
import { LoadingTypes } from '@constants';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

  public isLoading$: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.getDataFromStore();
  }

  private getDataFromStore(): void {
    this.isLoading$ = this.store.select(selectLoading, {type: LoadingTypes.AUTH})
  }


}
