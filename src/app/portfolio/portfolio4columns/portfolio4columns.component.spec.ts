import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio4columnsComponent } from './portfolio4columns.component';

describe('Portfolio4columnsComponent', () => {
  let component: Portfolio4columnsComponent;
  let fixture: ComponentFixture<Portfolio4columnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio4columnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio4columnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
