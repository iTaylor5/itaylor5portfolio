import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  List: any[] = [
    { 
      title: 'Starter',
      image: './assets/sofbox-v2/images/home-6/602.png',
      arrow_image: './assets/sofbox-v2/images/home-6/603.png',
      hoverClass: 'purple-hover',
      price: '$29',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      services: [ 
        { title: 'Single Domain', icon: 'ion ion-checkmark-round' },
        { title: '15 GB Disk Space', icon: 'ion ion-checkmark-round' },
        { title: '100 GB Transfer', icon: 'ion ion-checkmark-round' },
        { title: '5 Email Account ', icon: 'ion ion-checkmark-round' },
        { title: 'Free Domain Registration', icon: 'ion ion-checkmark-round' },
        { title: '99.9% Uptime Guarantee', icon: 'ion ion-checkmark-round' }
      ]
    },
    { 
      title: 'Deluxe',
      image: './assets/sofbox-v2/images/home-6/602.png',
      arrow_image: './assets/sofbox-v2/images/home-6/605.png',
      class: 'flex-row-reverse',
      hoverClass: 'org-hover',
      price: '$29',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      services: [ 
        { title: 'Single Domain', icon: 'ion ion-checkmark-round' },
        { title: '15 GB Disk Space', icon: 'ion ion-checkmark-round' },
        { title: '100 GB Transfer', icon: 'ion ion-checkmark-round' },
        { title: '5 Email Account ', icon: 'ion ion-checkmark-round' },
        { title: 'Free Domain Registration', icon: 'ion ion-checkmark-round' },
        { title: '99.9% Uptime Guarantee', icon: 'ion ion-checkmark-round' }
      ]
    },
    { 
      title: 'Ultimate',
      image: './assets/sofbox-v2/images/home-6/602.png',
      hoverClass: 'green-hover',
      price: '$29',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      services: [ 
        { title: 'Single Domain', icon: 'ion ion-checkmark-round' },
        { title: '15 GB Disk Space', icon: 'ion ion-checkmark-round' },
        { title: '100 GB Transfer', icon: 'ion ion-checkmark-round' },
        { title: '5 Email Account ', icon: 'ion ion-checkmark-round' },
        { title: 'Free Domain Registration', icon: 'ion ion-checkmark-round' },
        { title: '99.9% Uptime Guarantee', icon: 'ion ion-checkmark-round' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
