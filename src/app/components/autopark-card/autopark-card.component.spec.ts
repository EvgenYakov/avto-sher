import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoparkCardComponent } from './autopark-card.component';

describe('AutoparkCardComponent', () => {
  let component: AutoparkCardComponent;
  let fixture: ComponentFixture<AutoparkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoparkCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoparkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
