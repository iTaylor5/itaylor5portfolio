import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailLeftSidebarComponent } from './blog-detail-left-sidebar.component';

describe('BlogDetailLeftSidebarComponent', () => {
  let component: BlogDetailLeftSidebarComponent;
  let fixture: ComponentFixture<BlogDetailLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetailLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
