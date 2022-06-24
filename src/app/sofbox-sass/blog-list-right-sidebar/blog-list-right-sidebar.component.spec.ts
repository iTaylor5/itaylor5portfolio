import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListRightSidebarComponent } from './blog-list-right-sidebar.component';

describe('BlogListRightSidebarComponent', () => {
  let component: BlogListRightSidebarComponent;
  let fixture: ComponentFixture<BlogListRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
