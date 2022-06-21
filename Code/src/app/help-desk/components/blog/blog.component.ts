import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Latest Posts',
    description: 'If you are planning on developing a product landing.'
  };

  List: any[] = [
    { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: './assets/sofbox-v2/images/home-1/16.jpg'},
    { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: './assets/sofbox-v2/images/home-1/17.jpg'},
    { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: './assets/sofbox-v2/images/home-1/18.jpg'},
    { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: './assets/sofbox-v2/images/home-1/19.jpg'},
    { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: './assets/sofbox-v2/images/home-1/20.jpg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
