import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-tabs',
  templateUrl: './service-tabs.component.html',
  styleUrls: ['./service-tabs.component.css']
})
export class ServiceTabsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'What Sofbox can do for you?',
    description: 'If you are planning on developing a product landing'
  };

  List: any[] = [
    { 
      title: 'Unique Design',
      id: 'tab-unique-design',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      active: true
    },
    { 
      title: 'Easy to Customize',
      id: 'tab-easy-to-customize',
      image: './assets/sofbox-v2/images/home-6/615.png',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'Multipurpose layout',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.show_content').find('.active').removeClass('active show');
    jquery('.nav-item').find('.active1').removeClass('active1');
    jquery('#' + id).addClass('active show');
  }

}
