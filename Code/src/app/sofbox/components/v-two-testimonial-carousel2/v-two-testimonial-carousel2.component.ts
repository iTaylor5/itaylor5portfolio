import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-testimonial-carousel2',
  templateUrl: './v-two-testimonial-carousel2.component.html',
  styleUrls: ['./v-two-testimonial-carousel2.component.css']
})
export class VTwoTestimonialCarousel2Component implements OnInit {

  @Input() testimonialList: any[];

  constructor() { }

  ngOnInit() {
  }

}
