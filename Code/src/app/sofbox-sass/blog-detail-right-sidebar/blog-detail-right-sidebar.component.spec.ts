import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailRightSidebarComponent } from './blog-detail-right-sidebar.component';

describe('BlogDetailRightSidebarComponent', () => {
  let component: BlogDetailRightSidebarComponent;
  let fixture: ComponentFixture<BlogDetailRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetailRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
