import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-sidebar',
  templateUrl: './black-sidebar.component.html',
  styleUrls: ['./black-sidebar.component.css']
})
export class BlackSidebarComponent implements OnInit {

  name = 'About Author';
  image = './assets/sofbox-sass-black/images/blog/clients/01.jpg';
  description = 'Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.';

  public categoriesData = [
    {
      categoriesName: 'Digtel Agency',
      count: '8'
    },
    {
      categoriesName: 'Creative',
      count: '5'
    },
    {
      categoriesName: 'Digital Marketing',
      count: '9'
    },
    {
      categoriesName: 'Creative',
      count: '3'
    },
    {
      categoriesName: 'Digital Marketing',
      count: '6'
    },
    {
      categoriesName: 'Digtel Agency',
      count: '4'
    },
    {
      categoriesName: 'Digital Marketing',
      count: '9'
    },
    {
      categoriesName: 'Digtel Agency',
      count: '2'
    },
    {
      categoriesName: 'Digital Marketing',
      count: '7'
    }
  ];

  public recentPosts = [
    {
      image: './assets/sofbox-sass-black/images/blog/blog-detail/01.jpg',
      title: 'Fully dedicated finding.',
      date: '01 February 2019'
    },
    {
      image: './assets/sofbox-sass-black/images/blog/blog-detail/02.jpg',
      title: 'Progravida nibh vel.',
      date: '01 February 2019'
    },
    {
      image: './assets/sofbox-sass-black/images/blog/blog-detail/03.jpg',
      title: 'Auctor alinean.',
      date: '01 February 2019'
    },
    {
      image: './assets/sofbox-sass-black/images/blog/blog-detail/04.jpg',
      title: 'Alinean sollicitudin.',
      date: '01 February 2019'
    }
  ];


  ngOnInit() {
  }

}
