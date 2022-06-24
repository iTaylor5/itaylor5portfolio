import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSidebarComponent } from './black-sidebar.component';

describe('BlackSidebarComponent', () => {
  let component: BlackSidebarComponent;
  let fixture: ComponentFixture<BlackSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
