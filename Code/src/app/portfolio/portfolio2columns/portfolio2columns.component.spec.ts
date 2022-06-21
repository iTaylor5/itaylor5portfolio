import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio2columnsComponent } from './portfolio2columns.component';

describe('Portfolio2columnsComponent', () => {
  let component: Portfolio2columnsComponent;
  let fixture: ComponentFixture<Portfolio2columnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio2columnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio2columnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
