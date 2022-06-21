import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBannerStyle1Component } from './black-banner-style1.component';

describe('BlackBannerStyle1Component', () => {
  let component: BlackBannerStyle1Component;
  let fixture: ComponentFixture<BlackBannerStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackBannerStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackBannerStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
