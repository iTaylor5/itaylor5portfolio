import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio3columnsComponent } from './portfolio3columns.component';

describe('Portfolio3columnsComponent', () => {
  let component: Portfolio3columnsComponent;
  let fixture: ComponentFixture<Portfolio3columnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio3columnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio3columnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
