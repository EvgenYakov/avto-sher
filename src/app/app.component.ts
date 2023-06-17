import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Store } from '@ngrx/store';

import { LocalStorageService, UserService } from '@services';
import { LocalStorageKeys } from '@constants';
import { getMe } from '@store';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class AppComponent implements OnInit {

  private localStorage = inject( LocalStorageService );
  private store = inject( Store );

  constructor(
    private service: UserService
  ) {}

  ngOnInit(): void {
    if(this.localStorage.getItemFromStorage( LocalStorageKeys.ACCESS_TOKEN )) {
      this.store.dispatch( getMe() );
    }
  }

}
