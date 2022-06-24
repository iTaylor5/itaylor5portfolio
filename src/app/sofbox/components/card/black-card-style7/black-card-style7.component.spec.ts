import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackCardStyle7Component } from './black-card-style7.component';

describe('BlackCardStyle7Component', () => {
  let component: BlackCardStyle7Component;
  let fixture: ComponentFixture<BlackCardStyle7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackCardStyle7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackCardStyle7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
