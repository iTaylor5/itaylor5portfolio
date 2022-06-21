import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoTestimonialComponent } from './v-two-testimonial.component';

describe('VTwoTestimonialComponent', () => {
  let component: VTwoTestimonialComponent;
  let fixture: ComponentFixture<VTwoTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
