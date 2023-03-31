import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCardDetailedComponent } from './auto-card-detailed.component';

describe('AutoCardDetailedComponent', () => {
  let component: AutoCardDetailedComponent;
  let fixture: ComponentFixture<AutoCardDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoCardDetailedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoCardDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
