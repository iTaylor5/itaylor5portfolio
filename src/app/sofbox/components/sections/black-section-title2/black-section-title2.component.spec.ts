import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSectionTitle2Component } from './black-section-title2.component';

describe('BlackSectionTitle2Component', () => {
  let component: BlackSectionTitle2Component;
  let fixture: ComponentFixture<BlackSectionTitle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackSectionTitle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackSectionTitle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
