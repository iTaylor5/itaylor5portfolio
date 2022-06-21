import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Sofbox, the platform you deserve',
    description: 'If you are planning on developing a product landing app or website, take a look at this beautiful-crafted'
  };

  List: any[] = [
    { title: 'Fast Setup', image: './assets/sofbox-v2/images/home-1/01.png', description: 'There are many variations of passages of Lorem Ipsum available'},
    { title: 'Integrations', image: './assets/sofbox-v2/images/home-1/02.png', description: 'There are many variations of passages of Lorem Ipsum available'},
    { title: 'Data Sources', image: './assets/sofbox-v2/images/home-1/03.png', description: 'There are many variations of passages of Lorem Ipsum available'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
