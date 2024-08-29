import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LocalStorageKeys, ToasterType } from '@constants';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '@services';
import { getMe, selectBeError } from '@store';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export class AppComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private messageService: MessageService,
    private localStorage: LocalStorageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.getDataFromStore();
    if (this.localStorage.getItemFromStorage(LocalStorageKeys.ACCESS_TOKEN)) {
      this.store.dispatch(getMe());
    }
    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1110, // tooltip
    };
  }

  getDataFromStore(): void {
    this.store
      .select(selectBeError)
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ message, severity }) => {
        switch (severity) {
          case ToasterType.ERROR:
            this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
            break;
          case ToasterType.INFO:
            this.messageService.add({ severity: 'info', summary: 'Info', detail: message });
            break;
          case ToasterType.WARN:
            this.messageService.add({ severity: 'warn', summary: 'Warn', detail: message });
            break;
          case ToasterType.SUCCESS:
            this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
            break;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
