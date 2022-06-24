import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoFooterStyle1Component } from './v-two-footer-style1.component';

describe('VTwoFooterStyle1Component', () => {
  let component: VTwoFooterStyle1Component;
  let fixture: ComponentFixture<VTwoFooterStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoFooterStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoFooterStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
