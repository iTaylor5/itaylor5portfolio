import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsTrick1Component } from './tips-trick1.component';

describe('TipsTrick1Component', () => {
  let component: TipsTrick1Component;
  let fixture: ComponentFixture<TipsTrick1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsTrick1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsTrick1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
