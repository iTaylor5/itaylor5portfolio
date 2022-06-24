import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackCardStyle4Component } from './black-card-style4.component';

describe('BlackCardStyle4Component', () => {
  let component: BlackCardStyle4Component;
  let fixture: ComponentFixture<BlackCardStyle4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackCardStyle4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackCardStyle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
