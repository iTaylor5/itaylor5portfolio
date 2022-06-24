import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio5columnsComponent } from './portfolio5columns.component';

describe('Portfolio5columnsComponent', () => {
  let component: Portfolio5columnsComponent;
  let fixture: ComponentFixture<Portfolio5columnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio5columnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio5columnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
