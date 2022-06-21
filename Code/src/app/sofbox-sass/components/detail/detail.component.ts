import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public commentData = [
    {
      name: 'John Deo',
      image: './assets/sofbox-sass-black/images/blog/clients/02.jpg',
      date: '01 January 2019',
      description: 'Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.',
      parent: 0
    },
    {
      name: 'Kips Leo',
      image: './assets/sofbox-sass-black/images/blog/clients/03.jpg',
      date: '01 January 2019',
      description: 'Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.',
      parent: 1
    },
    {
      name: 'Glen Jax',
      image: './assets/sofbox-sass-black/images/blog/clients/01.jpg',
      date: '01 January 2019',
      description: 'Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.',
      parent: 0
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
