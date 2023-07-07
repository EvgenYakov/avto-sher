import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { getMe, loadRegions, selectBeError } from '@store';

import { MAIN_DEPS } from './main.dependencies';
import { LocalStorageKeys } from '@constants';
import { LocalStorageService } from '@services';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Subject } from 'rxjs';

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [MAIN_DEPS, ToastModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService]
} )
export class MainComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(
    private localStorage: LocalStorageService,
    private store: Store,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    if (this.localStorage.getItemFromStorage( LocalStorageKeys.ACCESS_TOKEN )) {
      this.store.dispatch( getMe() );
    }
    this.store.dispatch( loadRegions() );

    this.getDataFromStore();
  }

  private getDataFromStore(): void {
    this.store.select( selectBeError ).pipe(

    ).subscribe( (detail) => {
      this.messageService.add( { severity: 'error', summary: 'Error', detail: detail } );
    } )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
