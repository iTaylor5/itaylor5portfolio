import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoFooterStyle2Component } from './v-two-footer-style2.component';

describe('VTwoFooterStyle2Component', () => {
  let component: VTwoFooterStyle2Component;
  let fixture: ComponentFixture<VTwoFooterStyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoFooterStyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoFooterStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
