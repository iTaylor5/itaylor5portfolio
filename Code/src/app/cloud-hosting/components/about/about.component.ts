import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  List: any[] = [
    { title: 'Connect your cloud', image: './assets/sofbox-v2/images/home-6/600.png', description: 'There are many variations of passages of Lorem Ipsum available, in' },
    { title: 'Choose a domain', image: './assets/sofbox-v2/images/home-6/602.png', description: 'There are many variations of passages of Lorem Ipsum available, in' },
    { title: 'Add Your Content', image: './assets/sofbox-v2/images/home-6/613.png', description: 'There are many variations of passages of Lorem Ipsum available, in' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
