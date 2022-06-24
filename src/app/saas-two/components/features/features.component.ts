import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    title: 'About Me',
    description: ''
  };

  // 

  List: any[] = [
    {
      title: 'Customized Invoices',
      icon: 'flaticon flaticon-accounting',
      hoverClass: 'purple-hover',
      desc: 'There are many variations of passages of Lorem Ipsum available.'
    },
    {
      title: 'Stock Management',
      icon: 'flaticon flaticon-professional',
      hoverClass: 'org-hover',
      desc: 'There are many variations of passages of Lorem Ipsum available.'
    },
    {
      title: 'Receivable & Payables',
      icon: 'flaticon flaticon-document-1',
      hoverClass: 'green-hover',
      desc: 'There are many variations of passages of Lorem Ipsum available.'
    },
    {
      title: 'Manage Bills & Expenses',
      icon: 'flaticon flaticon-growth-1',
      hoverClass: 'purple-hover',
      desc: 'There are many variations of passages of Lorem Ipsum available.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
