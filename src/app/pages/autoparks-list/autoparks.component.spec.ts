import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutes } from '@constants';
import { Store, StoreModule } from '@ngrx/store';
import { BreadcrumbService } from '@services';
import { loadAutoparks, selectAutoparksEntities, selectCurrentRegion, selectLoading } from '@store';
import { MenuItem } from 'primeng/api';
import { of } from 'rxjs';

import { AutoparksComponent } from './autoparks.component';

describe('AutoparksComponent', () => {
  let component: AutoparksComponent;
  let fixture: ComponentFixture<AutoparksComponent>;
  let store: jasmine.SpyObj<Store>;
  let breadcrumbService: jasmine.SpyObj<BreadcrumbService>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    breadcrumbService = jasmine.createSpyObj('BreadcrumbService', ['addBreadcrumb']);

    await TestBed.configureTestingModule({
      imports: [AutoparksComponent, StoreModule.forRoot({})],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: BreadcrumbService, useValue: breadcrumbService },
      ],
    }).compileComponents();

    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    fixture = TestBed.createComponent(AutoparksComponent);
    component = fixture.componentInstance;

    store.select.and.callFake((selector: any) => {
      switch (selector) {
        case selectAutoparksEntities:
          return of([]);
        case selectLoading:
          return of(false);
        case selectCurrentRegion:
          return of({ name: 'TestRegion' });
        default:
          return of(null);
      }
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form on init', () => {
    spyOn<AutoparksComponent, any>(component, 'setBreadcrumbs');
    spyOn<AutoparksComponent, any>(component, 'getDataFromStore');

    component.ngOnInit();

    expect(component['setBreadcrumbs']).toHaveBeenCalled();
    expect(component['getDataFromStore']).toHaveBeenCalled();
  });

  it('should set breadcrumbs on init', () => {
    const expectedBreadcrumb: MenuItem = {
      label: 'Автопарки',
      routerLink: `${AppRoutes.MAIN}/${AppRoutes.AUTOPARKS}`,
    };

    component['setBreadcrumbs']();

    expect(breadcrumbService.addBreadcrumb).toHaveBeenCalledWith(expectedBreadcrumb);
  });

  it('should select autoparks and loading state from store', () => {
    component['getDataFromStore']();

    component.autoparks$.subscribe(autoparks => {
      expect(autoparks).toEqual([]);
    });

    component.isLoading$.subscribe(isLoading => {
      expect(isLoading).toBeFalse();
    });
  });

  it('should dispatch loadAutoparks on region change', () => {
    component['getAutoparks']();

    expect(store.dispatch).toHaveBeenCalledWith(loadAutoparks({ regionName: 'TestRegion' }));
  });

  it('should complete destroy$ on ngOnDestroy', () => {
    spyOn(component['destroy$'], 'next');
    spyOn(component['destroy$'], 'complete');

    component.ngOnDestroy();

    expect(component['destroy$'].next).toHaveBeenCalled();
    expect(component['destroy$'].complete).toHaveBeenCalled();
  });
});
