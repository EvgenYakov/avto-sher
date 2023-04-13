import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFilterComponent } from './auto-filter.component';

describe('AutoFilterComponent', () => {
  let component: AutoFilterComponent;
  let fixture: ComponentFixture<AutoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
