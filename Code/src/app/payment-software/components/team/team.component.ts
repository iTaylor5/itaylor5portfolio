import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  titleSectionProp = {
    title: 'What Sofbox can do for you?',
    description: 'If you are planning on developing a product landing'
  };

  List: any[] = [
    {
      name: 'Sal Monella',
      title: 'Business Advisor',
      image: './assets/sofbox-v2/images/home-2/214.jpeg',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      name: 'Rick O\'Shea',
      title: 'Business Advisor',
      image: './assets/sofbox-v2/images/home-2/215.jpeg',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      name: 'Brock Lee',
      title: 'Business Advisor',
      image: './assets/sofbox-v2/images/home-2/216.jpeg',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      name: 'Paige Turner',
      title: 'Business Advisor',
      image: './assets/sofbox-v2/images/home-2/217.jpeg',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      name: 'Gail Forcewind',
      title: 'Business Advisor',
      image: './assets/sofbox-v2/images/home-2/218.jpeg',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      name: 'Paul Molive',
      title: 'Business Advisor',
      image: './assets/sofbox-v2/images/home-2/219.jpeg',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      name: 'Anna Sthesia',
      title: 'Business Advisor',
      image: './assets/sofbox-v2/images/home-2/220.jpeg',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
