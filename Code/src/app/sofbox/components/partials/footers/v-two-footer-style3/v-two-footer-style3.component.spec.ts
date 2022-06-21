import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoFooterStyle3Component } from './v-two-footer-style3.component';

describe('VTwoFooterStyle3Component', () => {
  let component: VTwoFooterStyle3Component;
  let fixture: ComponentFixture<VTwoFooterStyle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoFooterStyle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoFooterStyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
