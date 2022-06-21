import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Simple and transparent pricing',
    description: 'If you are planning on developing a product landing'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
