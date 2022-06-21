import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoTestimonialCarousel2Component } from './v-two-testimonial-carousel2.component';

describe('VTwoTestimonialCarousel2Component', () => {
  let component: VTwoTestimonialCarousel2Component;
  let fixture: ComponentFixture<VTwoTestimonialCarousel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoTestimonialCarousel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoTestimonialCarousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
