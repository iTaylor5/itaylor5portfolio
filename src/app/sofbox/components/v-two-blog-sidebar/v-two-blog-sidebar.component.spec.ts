import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoBlogSidebarComponent } from './v-two-blog-sidebar.component';

describe('VTwoBlogSidebarComponent', () => {
  let component: VTwoBlogSidebarComponent;
  let fixture: ComponentFixture<VTwoBlogSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoBlogSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoBlogSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
