import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../../sofbox/plugins.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  titleSectionProp = {
    title: 'Why you chose our Payment?',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    class: 'text-left'
  };

  List: any[] = [
    { title: 'Secure Payment' ,image: './assets/sofbox-v2/images/home-2/202.png', description: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Payment Overview' ,image: './assets/sofbox-v2/images/home-2/203.png', description: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Get Discount' ,image: './assets/sofbox-v2/images/home-2/204.png', description: 'There are many variations of passages of Lorem Ipsum available.'},
  ]
  constructor(private plugins: PluginsService) {
  }

  ngOnInit() {
    const current = this;
    current.plugins.scrollme();
  }

}
