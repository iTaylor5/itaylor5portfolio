import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoCardStyle3Component } from './v-two-card-style3.component';

describe('VTwoCardStyle3Component', () => {
  let component: VTwoCardStyle3Component;
  let fixture: ComponentFixture<VTwoCardStyle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoCardStyle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoCardStyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
