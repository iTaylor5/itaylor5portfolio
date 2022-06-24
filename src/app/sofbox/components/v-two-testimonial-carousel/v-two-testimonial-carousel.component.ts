import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-testimonial-carousel',
  templateUrl: './v-two-testimonial-carousel.component.html',
  styleUrls: ['./v-two-testimonial-carousel.component.css']
})
export class VTwoTestimonialCarouselComponent implements OnInit {

  @Input() testimonialList: any[];

  constructor() { }

  ngOnInit() {
  }

}
