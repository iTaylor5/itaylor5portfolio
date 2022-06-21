import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoCardStyle4Component } from './v-two-card-style4.component';

describe('VTwoCardStyle4Component', () => {
  let component: VTwoCardStyle4Component;
  let fixture: ComponentFixture<VTwoCardStyle4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoCardStyle4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoCardStyle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
