import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsTrick2Component } from './tips-trick2.component';

describe('TipsTrick2Component', () => {
  let component: TipsTrick2Component;
  let fixture: ComponentFixture<TipsTrick2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsTrick2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsTrick2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
