import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    title: 'About Me',
    description: 'I have had a long-standing fascination with software and technology. Especially beautifully laid out applications with an intuitive feel and elegant design. I am passionate about creating such solutions. After spending time in the offshore oil and gas industry as a commercial diver, I finally made a drastic change towards a career that I love. I sacrificed a great deal to begin my journey as a software engineer, and five years later, I have no regrets. My wife and I have recently moved back to Zimbabwe, where we live with our vibrant 4-year-old. We both work in the software industry.'
  };

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
