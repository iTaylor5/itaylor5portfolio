import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoHeaderStyle1Component } from './v-two-header-style1.component';

describe('VTwoHeaderStyle1Component', () => {
  let component: VTwoHeaderStyle1Component;
  let fixture: ComponentFixture<VTwoHeaderStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoHeaderStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoHeaderStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
