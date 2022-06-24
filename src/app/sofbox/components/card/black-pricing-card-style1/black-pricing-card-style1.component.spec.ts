import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackPricingCardStyle1Component } from './black-pricing-card-style1.component';

describe('BlackPricingCardStyle1Component', () => {
  let component: BlackPricingCardStyle1Component;
  let fixture: ComponentFixture<BlackPricingCardStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackPricingCardStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackPricingCardStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
