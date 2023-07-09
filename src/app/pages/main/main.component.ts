import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

import { getMe, loadRegions, selectBeError } from '@store';

import { LocalStorageKeys, ToasterType } from '@constants';
import { LocalStorageService } from '@services';

import { MAIN_DEPS } from './main.dependencies';

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [MAIN_DEPS],
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
      takeUntil( this.destroy$ )
    ).subscribe( ({ message, severity }) => {
      switch (severity) {
        case ToasterType.ERROR:
          this.messageService.add( { severity: 'error', summary: 'Error', detail: message } );
          break;
        case ToasterType.INFO:
          this.messageService.add( { severity: 'info', summary: 'Info', detail: message } );
          break;
        case ToasterType.WARN:
          this.messageService.add( { severity: 'warn', summary: 'Warn', detail: message } );
          break;
        case ToasterType.SUCCESS:
          this.messageService.add( { severity: 'success', summary: 'Success', detail: message } );
          break;
      }
    } )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
