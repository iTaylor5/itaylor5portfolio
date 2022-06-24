import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-pricing-card-style1',
  templateUrl: './v-two-pricing-card-style1.component.html',
  styleUrls: ['./v-two-pricing-card-style1.component.css']
})
export class VTwoPricingCardStyle1Component implements OnInit {

  constructor() { }

  @Input() className: string;
 
  ngOnInit() {
  }

}
