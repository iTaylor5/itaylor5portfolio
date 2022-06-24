import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListLeftSidebarComponent } from './blog-list-left-sidebar.component';

describe('BlogListLeftSidebarComponent', () => {
  let component: BlogListLeftSidebarComponent;
  let fixture: ComponentFixture<BlogListLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
