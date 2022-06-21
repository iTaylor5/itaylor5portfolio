import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  titleSectionProp = {
    title: 'Save Your Time & See How It works any platform',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    class: 'text-left'
  };

  List : any[] = [
    { title: 'Make Account', icon: 'flaticon-accounting', hoverClass: 'purple-hover' },
    { title: 'Select Recipient', icon: 'flaticon-reward', hoverClass: 'org-hover' },
    { title: 'Send Money', icon: 'flaticon-investment', hoverClass: 'green-hover' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
