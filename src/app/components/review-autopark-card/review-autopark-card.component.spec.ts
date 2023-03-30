import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAutoparkCardComponent } from '@components';

describe('ReviewCardComponent', () => {
  let component: ReviewAutoparkCardComponent;
  let fixture: ComponentFixture<ReviewAutoparkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAutoparkCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewAutoparkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
