import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAutoCardComponent } from './review-auto-card.component';

describe('ReviewAutoCardComponent', () => {
  let component: ReviewAutoCardComponent;
  let fixture: ComponentFixture<ReviewAutoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAutoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewAutoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
