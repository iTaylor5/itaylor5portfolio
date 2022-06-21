import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css']
})
export class DevelopmentComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'What can we help you?',
    description: 'If you are planning on developing a product landing'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
