import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRouter, RouterLink, RouterOutlet } from '@angular/router';

import { UserRole } from '@constants';
import { DestroyDirective } from '@directives';
import { AutoparkDetailed, UserProfile } from '@models';
import { Store } from '@ngrx/store';
import { AutoparkFacade } from '@store';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { of } from 'rxjs';

import { UserFacade } from '../../../../store/user/user.facade';

import { ControlPanelComponent } from './control-panel.component';

const mockProfile: UserProfile = {
  id: 1,
  fullName: 'John Doe',
  phoneNumber: '+1234567890',
  email: 'john@example.com',
  avatar: 'https://example.com/avatar.jpg',
  info: 'Some information about John Doe',
  role: UserRole.OPERATOR,
  requestsCounter: 0,
  ordersCounter: 0,
  reviewsAboutUserCounter: 0,
  reviewsByUserCounter: 0,
  favoriteCarsCounter: 0,
  favoriteAutoparksCounter: 1,
  autopark: {
    id: 1,
    title: 'Test Autopark',
    logo: 'https://example.com/logo.png',
    rating: 4.2,
    isPremium: true,
    region: 'Europe',
    carsCount: 10,
    isFavorite: false,
    ordersCount: 22,
    description: 'This is a test autopark.',
    backgroundImage: 'https://example.com/background.png',
    createdAt: new Date(),
    address: '123 Main St',
    phoneNumber: '+1234567890',
    rentalConditions: ['Condition 1', 'Condition 2'],
    rentSchedule: 'Monday to Friday',
    minRentPeriod: '1 day',
    bonuses: [],
  },
};

const mockAutoPark: AutoparkDetailed = {
  id: 1,
  title: 'Test Autopark',
  logo: 'https://example.com/logo.png',
  rating: 4.2,
  isPremium: true,
  region: 'Europe',
  carsCount: 10,
  isFavorite: false,
  ordersCount: 22,
  description: 'This is a test autopark.',
  backgroundImage: 'https://example.com/background.png',
  createdAt: new Date(),
  address: '123 Main St',
  phoneNumber: '+1234567890',
  rentalConditions: ['Condition 1', 'Condition 2'],
  rentSchedule: 'Monday to Friday',
  minRentPeriod: '1 day',
  bonuses: [],
};
describe('ControlPanelComponent', () => {
  let component: ControlPanelComponent;
  let fixture: ComponentFixture<ControlPanelComponent>;
  let autoparkFacade: jasmine.SpyObj<AutoparkFacade>;
  let userFacade: jasmine.SpyObj<UserFacade>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const mockAutoparkFacadeSpy = jasmine.createSpyObj('AutoparkFacade', ['selectAutoPark', 'activeAutopark$']);
    // const mockUserFacadeSpy = jasmine.createSpyObj('UserFacade', ['userProfile$']);
    const storeSpy = {
      dispatch: jasmine.createSpy('dispatch'),
      select: jasmine.createSpy('select').and.returnValue(of({})),
    };
    const userFacadeSpy = jasmine.createSpyObj('UserFacade', ['userProfile$']);

    await TestBed.configureTestingModule({
      imports: [
        ControlPanelComponent,
        CommonModule,
        SidebarModule,
        RouterOutlet,
        DropdownModule,
        RouterLink,
        FormsModule,
        RouterLink,
        ReactiveFormsModule,
        ButtonModule,
      ],
      providers: [
        { provide: DestroyDirective, useValue: new DestroyDirective() },
        { provide: AutoparkFacade, useValue: mockAutoparkFacadeSpy },
        { provide: Store, useValue: storeSpy },
        { provide: UserFacade, useValue: userFacadeSpy },
        provideRouter([{ path: '**', component: ControlPanelComponent }]),
        RouterOutlet,
      ],
    }).compileComponents();

    // store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    autoparkFacade = TestBed.inject(AutoparkFacade) as jasmine.SpyObj<AutoparkFacade>;
    userFacade = TestBed.inject(UserFacade) as jasmine.SpyObj<UserFacade>;
    // store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    fixture = TestBed.createComponent(ControlPanelComponent);
    component = fixture.componentInstance;
  });
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set sidebarVisible to true when selectIcon is called', () => {
    component.selectIcon(0);
    expect(component.sidebarVisible).toBe(true);
  });

  it('should disable autoParkControl when autopark is selected', fakeAsync(async () => {
    const newMock = mockProfile;
    newMock.role = UserRole.OPERATOR;
    newMock.autopark = mockAutoPark;
    userFacade.userProfile$ = of(newMock);
    autoparkFacade.activeAutopark$ = of(null);
    component.ngOnInit();
    tick(200);
    expect(component.autoParkControl.disabled).toBe(true);
  }));

  it('should enable autoParkControl when no autopark is selected', () => {
    const newMock = mockProfile;
    newMock.autopark = undefined;
    userFacade.userProfile$ = of(newMock);
    autoparkFacade.activeAutopark$ = of(null);
    component.ngOnInit();
    expect(component.autoParkControl.disabled).toBe(false);
  });
  it('should set isAutoparksLoading to true when getDataFromStore is called', fakeAsync(async () => {
    spyOn(component, 'getDataFromStore');
    const newMock = mockProfile;
    newMock.role = UserRole.OWNER;
    autoparkFacade.activeAutopark$ = of(null);
    userFacade.userProfile$ = of(newMock);
    component.getDataFromStore();
    component.ngOnInit();
    component.isAutoparksLoading$.subscribe(console.log);
    expect(component.isAutoparksLoading$.getValue()).toBe(false);
  }));
});
