import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoCardStyle1Component } from './v-two-card-style1.component';

describe('VTwoCardStyle1Component', () => {
  let component: VTwoCardStyle1Component;
  let fixture: ComponentFixture<VTwoCardStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoCardStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoCardStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
