import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getMe, selectBeError } from '@store';
import { Subject, takeUntil } from 'rxjs';
import { LocalStorageKeys, ToasterType } from '@constants';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from '@services';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService]
} )
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private messageService: MessageService,
    private localStorage: LocalStorageService,
  ) {}

  ngOnInit() {
    this.getDataFromStore();
    if (this.localStorage.getItemFromStorage( LocalStorageKeys.ACCESS_TOKEN )) {
      this.store.dispatch( getMe() );
    }
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
