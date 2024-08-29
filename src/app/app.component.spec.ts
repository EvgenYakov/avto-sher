import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';

import { LocalStorageKeys, ToasterType } from '@constants';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '@services';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { of } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: jasmine.SpyObj<Store>;
  let messageService: jasmine.SpyObj<MessageService>;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let primeNgConfig: jasmine.SpyObj<PrimeNGConfig>;

  beforeEach(async () => {
    const storeSpy = {
      dispatch: jasmine.createSpy('dispatch'),
      select: jasmine.createSpy('select').and.returnValue(of({})),
    };
    const messageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);
    const localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', ['getItemFromStorage']);
    const primeNgConfigSpy = jasmine.createSpyObj('PrimeNGConfig', ['zIndex']);

    await TestBed.configureTestingModule({
      imports: [AppComponent, BrowserAnimationsModule],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: MessageService, useValue: messageServiceSpy },
        { provide: LocalStorageService, useValue: localStorageServiceSpy },
        { provide: PrimeNGConfig, useValue: primeNgConfigSpy },
        RouterOutlet,
        ToastModule,
        PrimeNGConfig,
      ],
    })
      .overrideComponent(AppComponent, {
        set: { providers: [{ provide: MessageService, useValue: messageServiceSpy }] },
      })
      .compileComponents();

    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    messageService = TestBed.inject(MessageService) as jasmine.SpyObj<MessageService>;
    localStorageService = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
    primeNgConfig = TestBed.inject(PrimeNGConfig) as jasmine.SpyObj<PrimeNGConfig>;

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data from store and local storage', () => {
    const accessToken = 'test-token';
    localStorageService.getItemFromStorage.and.returnValue(of(accessToken));
    const meAction = { type: '[USER] Get user information' }; // Assuming 'getMe()' returns this action

    component.ngOnInit();

    expect(localStorageService.getItemFromStorage).toHaveBeenCalledWith(LocalStorageKeys.ACCESS_TOKEN);
    expect(store.dispatch).toHaveBeenCalledWith(meAction);
    expect(primeNgConfig.zIndex).toEqual({
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1110,
    });
  });

  it('should handle data from store and display toasts accordingly', fakeAsync(() => {
    const testData = { message: 'Test message', severity: ToasterType.INFO };
    store.select.and.returnValue(of(testData));

    component.getDataFromStore();
    tick(5000);

    expect(messageService.add).toHaveBeenCalledWith({ severity: 'info', summary: 'Info', detail: testData.message });
  }));

  describe('ngOnDestroy', () => {
    it('should unsubscribe from observables', fakeAsync(() => {
      const destroy$Spy = spyOn(component.destroy$, 'next').and.callThrough();
      const completeSpy = spyOn(component.destroy$, 'complete');

      tick();

      expect(destroy$Spy).not.toHaveBeenCalled();
      expect(completeSpy).not.toHaveBeenCalled();

      fixture.destroy(); // Simulate component destruction

      expect(destroy$Spy).toHaveBeenCalledTimes(1); // Check if next() was called
      expect(completeSpy).toHaveBeenCalled(); // Check if complete() was called
    }));
  });
});
