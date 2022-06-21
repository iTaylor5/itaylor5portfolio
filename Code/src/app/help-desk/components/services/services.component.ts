import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  List: any[] = [
    { 
      title: 'Live Chat Software',
      id: 'tab-live-chat-software',
      image: './assets/sofbox-v2/images/home-3/309.jpeg',
      subtitle: 'Live Chat Software Included !',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.',
      active: true
    },
    { 
      title: 'Customer Services',
      id: 'tab-customer-service',
      image: './assets/sofbox-v2/images/home-3/309.jpeg',
      subtitle: 'Cusomer Services Included !',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
    },
    { 
      title: 'Customer Conversation',
      id: 'tab-customer-conversation',
      image: './assets/sofbox-v2/images/home-3/309.jpeg',
      subtitle: 'Customer Conversation !',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
    },
    { 
      title: 'Software For Business',
      id: 'tab-software-for-business',
      image: './assets/sofbox-v2/images/home-3/309.jpeg',
      subtitle: 'Software For Business Included !!',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
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
