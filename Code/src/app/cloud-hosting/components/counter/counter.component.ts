import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Join our global community',
    description: 'If you are planning on developing a product landing'
  };


  List: any [] = [
    { title: 'Customers', value: '4', cost: 'M'  },
    { title: 'Customers', value: '150', cost: 'M'  },
    { title: 'Customers', value: '4', cost: 'B'  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
