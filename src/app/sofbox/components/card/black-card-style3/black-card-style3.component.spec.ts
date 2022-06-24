import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackCardStyle3Component } from './black-card-style3.component';

describe('BlackCardStyle3Component', () => {
  let component: BlackCardStyle3Component;
  let fixture: ComponentFixture<BlackCardStyle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackCardStyle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackCardStyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
