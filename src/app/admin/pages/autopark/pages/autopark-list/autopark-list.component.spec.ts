import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyDirective } from '@directives';
import { provideMockStore } from '@ngrx/store/testing';

import { AutoparkListComponent } from './autopark-list.component';

describe('AutoparkListComponent', () => {
  let component: AutoparkListComponent;
  let fixture: ComponentFixture<AutoparkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoparkListComponent, DestroyDirective],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoparkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
