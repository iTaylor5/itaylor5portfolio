import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTwoTestimonialCarouselComponent } from './v-two-testimonial-carousel.component';

describe('VTwoTestimonialCarouselComponent', () => {
  let component: VTwoTestimonialCarouselComponent;
  let fixture: ComponentFixture<VTwoTestimonialCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTwoTestimonialCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTwoTestimonialCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
