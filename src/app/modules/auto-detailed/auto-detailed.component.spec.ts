import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDetailedComponent } from './auto-detailed.component';

describe('AutoDetailedComponent', () => {
  let component: AutoDetailedComponent;
  let fixture: ComponentFixture<AutoDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [AutoDetailedComponent]
}).compileComponents();

    fixture = TestBed.createComponent(AutoDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
