import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Our company\'s services for you.',
    description: 'If you are planning on developing a product landing'
  };

  List : any[] = [
    { title: 'Competitive Salary', icon: 'flaticon flaticon-investment', hoverClass: 'purple-hover' },
    { title: 'Stock Management', icon: 'flaticon flaticon-accounting', hoverClass: 'org-hover' },
    { title: 'Receivable & Payables', icon: 'flaticon flaticon-government', hoverClass: 'green-hover' },
    { title: 'Manage Buying & Selling', icon: 'flaticon flaticon-care', hoverClass: 'purple-hover' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
