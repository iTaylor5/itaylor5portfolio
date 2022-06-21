import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  titleSectionProp = {
    title: 'Join our global community and get access',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    class: 'text-left',
    titleClass: 'text-white',
    descClass: 'text-white'
  };
  
  counterList: any[] = [
    { title: 'Customers', value: '40', cost: 'M'},
    { title: 'Transactions', value: '150', cost: 'M'},
    { title: 'Total value', value: '50', cost: 'B', price: ''}
  ]
  constructor() { }

  ngOnInit() {
  }

}
