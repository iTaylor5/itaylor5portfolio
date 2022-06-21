import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoBlogCardComponent } from './v-two-blog-card.component';

describe('VTwoBlogCardComponent', () => {
  let component: VTwoBlogCardComponent;
  let fixture: ComponentFixture<VTwoBlogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoBlogCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
