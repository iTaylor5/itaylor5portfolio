import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PluginsService} from '../plugins.service';
import $ from 'jquery';


@Component({
  selector: 'app-root-comp',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RootComponent implements OnInit {

  constructor(private plugins: PluginsService) {

  }

  List: any[] = [
    {
      title: 'Cloud Hosting',
      link: '/cloud-hosting',
      class: 'sofbox',
      image: './assets/intro/images/home/cloud-hosting.jpg'
    },
    {
      title: 'Help Desk',
      link: '/help-desk',
      class: 'sofbox',
      image: './assets/intro/images/home/help-desk.jpg'
    },
    {
      title: 'Payment Software',
      link: '/payment-software',
      class: 'sofbox',
      image: './assets/intro/images/home/payment-software.jpg'
    },
    {
      title: 'Saas Six',
      link: '/saas-six',
      class: 'sofbox',
      image: './assets/intro/images/home/saas-6.jpg'
    },
    {
      title: 'Saas Five',
      link: '/saas-five',
      class: 'sofbox',
      image: './assets/intro/images/home/saas-5.jpg'
    },
    {
      title: 'Saas Four',
      link: '/saas-four',
      class: 'sofbox',
      image: './assets/intro/images/home/saas-4.jpg'
    },
    {
      title: 'Saas Three',
      link: '/saas-three',
      class: 'sofbox',
      image: './assets/intro/images/home/saas-3.jpg'
    },
    {
      title: 'Saas Two',
      link: '/saas-two',
      class: 'sofbox',
      image: './assets/intro/images/home/saas-2.jpg'
    },
    {
      title: 'Saas Main',
      link: '/saas-main',
      class: 'sofbox',
      image: './assets/intro/images/home/home-main.jpg'
    },
    {
      title: 'Sofbox Saas',
      link: '/sofbox-saas',
      class: 'sofbox',
      image: './assets/intro/images/home/112.jpg'
    },
    {
      title: 'Landing Page11',
      link: '/landing-page11',
      class: 'sofbox',
      image: './assets/intro/images/home/67.jpg'
    },
    {
      title: 'Landing Page10',
      link: '/landing-page10',
      class: 'sofbox',
      image: './assets/intro/images/home/64.jpg'
    },
    {
      title: 'Landing Page9',
      link: '/landing-page9',
      class: 'sofbox',
      image: './assets/intro/images/home/63.jpg'
    },
    {
      title: 'Landing Page8',
      link: '/landing-page8',
      class: 'sofbox',
      image: './assets/intro/images/home/03.jpg'
    },
    {
      title: 'Landing Page7',
      link: '/landing-page7',
      class: 'sofbox',
      image: './assets/intro/images/home/02.jpg'
    },
    {
      title: 'Landing Page6',
      link: '/landing-page6',
      class: 'sofbox',
      image: './assets/intro/images/home/107.jpg'
    },
    {
      title: 'Landing Page5',
      link: '/landing-page5',
      class: 'sofbox',
      image: './assets/intro/images/home/62.jpg'
    },
    {
      title: 'Landing Page4',
      link: '/landing-page4',
      class: 'sofbox',
      image: './assets/intro/images/home/61.jpg'
    },
    {
      title: 'Landing Page3',
      link: '/landing-page3',
      class: 'sofbox',
      image: './assets/intro/images/home/105.jpg'
    },
    {
      title: 'Landing Page2',
      link: '/landing-page2',
      class: 'sofbox',
      image: './assets/intro/images/home/106.jpg'
    },
    {
      title: 'Landing Page 1',
      link: '/landing-page1',
      class: 'sofbox',
      image: './assets/intro/images/home/01.jpg'
    }
    
  ]
  ngOnInit() {
    // Init all plugins...
    const current = this;
    current.plugins.revolutionSlider();
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      current.plugins.index();
    }, 400);
  }

  navItems: any[] = [
    { title: 'Home', href: '#home', active: true },
    { title: 'Demo', href: '#demos-isotop' },
    { title: 'Features', href: '#features' }
  ];

  jumpTo(href) {
    $('html, body').stop().animate({
      scrollTop: $(href).offset().top
    }, 1500);
  }
}
