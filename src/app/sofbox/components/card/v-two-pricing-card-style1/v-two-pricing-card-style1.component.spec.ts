import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoPricingCardStyle1Component } from './v-two-pricing-card-style1.component';

describe('VTwoPricingCardStyle1Component', () => {
  let component: VTwoPricingCardStyle1Component;
  let fixture: ComponentFixture<VTwoPricingCardStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoPricingCardStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoPricingCardStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
