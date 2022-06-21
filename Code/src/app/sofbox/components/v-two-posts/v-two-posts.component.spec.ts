import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoPostsComponent } from './v-two-posts.component';

describe('VTwoPostsComponent', () => {
  let component: VTwoPostsComponent;
  let fixture: ComponentFixture<VTwoPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
