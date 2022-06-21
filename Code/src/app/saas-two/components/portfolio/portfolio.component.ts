import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Recent Works',
    description: 'From Python and AI modules to Java and Angular'
  };

  List: any[] = [
    { title: 'Tractor Tracker', description: "Designed to capture customers, drivers, machines and implement history from a straightforward input, simplifying admin tasks while capturing all significant information necessary to monitor the company's well-being.", image: './assets/sofbox-v2/images/home-1/16.jpg' },
    { title: 'Family Finance App', description: 'Built to help a family monitor their finances and track their expenditure', image: './assets/sofbox-v2/images/home-1/17.jpg' },
    { title: 'Sizing Company', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/18.jpg' },
    // { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/19.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
