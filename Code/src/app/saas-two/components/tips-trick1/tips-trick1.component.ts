import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-trick1',
  templateUrl: './tips-trick1.component.html',
  styleUrls: ['./tips-trick1.component.css']
})
export class TipsTrick1Component implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'And finally to web applications',
    description: 'With the adventures of youth out of my system, my time is spent on devving, predominantly focusing on building web applications with these tools '
  };

  List: any[] = [
    {
      title: 'Spring Based APIs',
      image: './assets/pictures/spring.png',
      desc: 'Backend predominantly done with Spring'
    },
    {
      title: 'Angular Frontend',
      image: './assets/pictures/angular.png',
      desc: 'Fontend with Angular'
    },
    {
      title: 'MySQL',
      image: './assets/pictures/mysql.png',
      desc: 'Database MySQL'
    }
    ,
    {
      title: 'Powered by AWS',
      image: './assets/pictures/aws.png',
      desc: 'Hosted and built using AWS'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
