import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  titleSectionProp = {
    title: 'What Sofbox can do for you?',
    description: 'If you are planning on developing a product landing'
  };

  List: any[] = [
    { title: 'Virtual Card', image: './assets/sofbox-v2/images/home-2/203.png', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Receivable & Payables', image: './assets/sofbox-v2/images/home-2/202.png', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Buyer Protection', image: './assets/sofbox-v2/images/home-2/204.png', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Auto Sync & Backup', image: './assets/sofbox-v2/images/home-2/207.png', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Easy Process', image: './assets/sofbox-v2/images/home-2/208.png', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Refund Policy', image: './assets/sofbox-v2/images/home-2/209.png', desc: 'There are many variations of passages of Lorem Ipsum available.'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
