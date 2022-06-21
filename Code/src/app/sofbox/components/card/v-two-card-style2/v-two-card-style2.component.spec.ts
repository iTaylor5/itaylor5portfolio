import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoCardStyle2Component } from './v-two-card-style2.component';

describe('VTwoCardStyle2Component', () => {
  let component: VTwoCardStyle2Component;
  let fixture: ComponentFixture<VTwoCardStyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoCardStyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoCardStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
