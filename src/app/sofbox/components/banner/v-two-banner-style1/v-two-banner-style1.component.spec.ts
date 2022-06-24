import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoBannerStyle1Component } from './v-two-banner-style1.component';

describe('VTwoBannerStyle1Component', () => {
  let component: VTwoBannerStyle1Component;
  let fixture: ComponentFixture<VTwoBannerStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoBannerStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoBannerStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
