import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  List: any[] = [
    { image: './assets/sofbox-v2/images/home-1/16.jpg' },
    { image: './assets/sofbox-v2/images/home-1/17.jpg' },
    { image: './assets/sofbox-v2/images/home-1/18.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
