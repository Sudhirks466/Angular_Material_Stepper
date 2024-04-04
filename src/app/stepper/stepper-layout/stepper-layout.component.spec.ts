import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperLayoutComponent } from './stepper-layout.component';

describe('StepperLayoutComponent', () => {
  let component: StepperLayoutComponent;
  let fixture: ComponentFixture<StepperLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperLayoutComponent]
    });
    fixture = TestBed.createComponent(StepperLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
