import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackListingStyle1Component } from './black-listing-style1.component';

describe('BlackListingStyle1Component', () => {
  let component: BlackListingStyle1Component;
  let fixture: ComponentFixture<BlackListingStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackListingStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackListingStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
