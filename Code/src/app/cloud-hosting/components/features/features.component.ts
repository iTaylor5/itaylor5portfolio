import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'What can we help you?',
    description: 'If you are planning on developing a product landing',
    titleClass: 'text-white',
    descClass: 'text-white'
  };


  List: any[] = [
    { title: 'Marketing', image: './assets/sofbox-v2/images/home-6/606.png' },
    { title: 'VPS', image: './assets/sofbox-v2/images/home-6/607.png' },
    { title: 'Email', image: './assets/sofbox-v2/images/home-6/608.png' },
    { title: 'SEO', image: './assets/sofbox-v2/images/home-6/609.png' },
    { title: 'Reseller Hosting', image: './assets/sofbox-v2/images/home-6/606.png' },
    { title: 'Web Security', image: './assets/sofbox-v2/images/home-6/607.png' },
    { title: 'Business Hosting', image: './assets/sofbox-v2/images/home-6/608.png' },
    { title: 'Fast Deployment', image: './assets/sofbox-v2/images/home-6/609.png' },
    { title: 'Protect and backup', image: './assets/sofbox-v2/images/home-6/607.png' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
