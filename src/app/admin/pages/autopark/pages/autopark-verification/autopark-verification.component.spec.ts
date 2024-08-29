import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoparkVerificationComponent } from './autopark-verification.component';

describe('AutoparkVerificationComponent', () => {
  let component: AutoparkVerificationComponent;
  let fixture: ComponentFixture<AutoparkVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoparkVerificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoparkVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
