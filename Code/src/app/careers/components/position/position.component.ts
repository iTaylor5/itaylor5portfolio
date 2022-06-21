import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Open Positions',
    description: 'If you are planning on developing a product landing'
  };

  List: any[] = [
    { 
      title: 'UI/UX designer',
      link: '/contact-us',
      active: true
    },
    { 
      title: 'Graphic Designer',
      link: '/contact-us'
    },
    { 
      title: 'Web Developer',
      link: '/contact-us'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
