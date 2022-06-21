import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-testimonial',
  templateUrl: './v-two-testimonial.component.html',
  styleUrls: ['./v-two-testimonial.component.css']
})
export class VTwoTestimonialComponent implements OnInit {

  @Input() sectionProp: any;

  constructor() { }

  ngOnInit() {
  }

}
