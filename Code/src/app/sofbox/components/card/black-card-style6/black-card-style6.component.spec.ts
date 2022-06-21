import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackCardStyle6Component } from './black-card-style6.component';

describe('BlackCardStyle6Component', () => {
  let component: BlackCardStyle6Component;
  let fixture: ComponentFixture<BlackCardStyle6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackCardStyle6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackCardStyle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
