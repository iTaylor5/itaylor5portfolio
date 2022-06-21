import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackCardStyle5Component } from './black-card-style5.component';

describe('BlackCardStyle5Component', () => {
  let component: BlackCardStyle5Component;
  let fixture: ComponentFixture<BlackCardStyle5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackCardStyle5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackCardStyle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
