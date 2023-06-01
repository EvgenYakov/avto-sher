import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoparksComponent } from './autoparks.component';

describe('AutoparksComponent', () => {
  let component: AutoparksComponent;
  let fixture: ComponentFixture<AutoparksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AutoparksComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AutoparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
