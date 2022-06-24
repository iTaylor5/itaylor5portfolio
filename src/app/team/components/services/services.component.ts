import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'Our Team have Experience in IT solutions & Services',
    description: 'If you are planning on developing a product landing'
  }
  
  List: any[] = [
    { title: 'Graphic Designs', value: '70'},
    { title: 'Web Design', value: '80'},
    { title: 'Mobile Application', value: '90'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
