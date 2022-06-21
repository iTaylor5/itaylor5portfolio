import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackPaginationComponent } from './black-pagination.component';

describe('BlackPaginationComponent', () => {
  let component: BlackPaginationComponent;
  let fixture: ComponentFixture<BlackPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
