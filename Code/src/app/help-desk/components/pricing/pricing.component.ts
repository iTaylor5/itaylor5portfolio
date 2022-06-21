import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  
  titleSectionProp: any = {
    class: 'text-center',
    title: 'Simple and transparent pricing',
    description: 'If you are planning on developing a product landing'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
