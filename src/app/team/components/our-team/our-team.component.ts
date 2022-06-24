import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  titleSectionProp = {
    class: 'text-center',
    title: 'Meet our team',
    description: 'If you are planning on developing a product landing'
  };

  List: any[] = [
    {
      src: './assets/sofbox-v2/images/home-1/21.jpeg',
      name: 'Sal Monella',
      title: 'Business Advisor',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/22.jpeg',
      name: 'Rick O Shea',
      title: 'Business Advisor',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/23.jpeg',
      name: 'Brock Lee',
      title: 'Business Advisor',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/24.jpeg',
      name: 'Paige Turner',
      title: 'Business Advisor',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/25.jpeg',
      name: ' Gail Forcewind',
      title: 'Business Advisor',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/26.jpeg',
      name: '  Paul Molive',
      title: 'Business Advisor',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/27.jpeg',
      name: '  Anna Sthesia',
      title: 'Business Advisor',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/28.jpeg',
      name: 'Petey Cruiser',
      title: 'Business Advisor',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/27.jpeg',
      name: 'Maxt Hang',
      title: 'Business Advisor',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/21.jpeg',
      name: 'Handry White',
      title: 'Business Advisor',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/22.jpeg',
      name: ' Anna Mull',
      title: 'CEO',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/23.jpeg',
      name: 'Petey Cruiser',
      title: 'COO',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/24.jpeg',
      name: 'Greta Life',
      title: 'Web Designer',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/25.jpeg',
      name: ' Marcash Dane',
      title: 'Project Manager',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    },
    {
      src: './assets/sofbox-v2/images/home-1/26.jpeg',
      name: 'Jany White',
      title: 'wp developer',
      links: [ { icon: 'fa fa-facebook-f' }, { icon: 'fa fa-twitter' }, { icon: 'fa fa-instagram' }]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
