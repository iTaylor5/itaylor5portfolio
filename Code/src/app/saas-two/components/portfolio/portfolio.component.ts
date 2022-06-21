import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @Output() projectSelected = new EventEmitter<any>();

  titleSectionProp: any = {
    title: 'Recent Works',
    description: 'From Python and AI modules to Java and Angular'
  };

  List: any[] = [
    {
      title: 'Tractor Tracker',
      description: "Is an application built for an equipment rental supplier in Zimbabwe to help manage their machine and implement rentals. ",
      image: './assets/past-project-images/tractorTracker/dashboard-1.png',
      id: "tractorTracker"
    },
    {
      title: 'Family Finance App',
      description: 'Is a finance app built to help families monitor their finances and track their expenditure in multi currency countries.',
      image: './assets/past-project-images/financeApp/dashboard-2.png',
      id: "famFinApp"
    },
    {
      title: 'Computer Vision Sizing App',
      description: 'Edged based computing system used to measure a human by the two images they upload to the app.',
      image: './assets/past-project-images/sizingCompany/img1.png',
      id: "sizingCompany"
    },
    // { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/19.jpg' },
  ];

  // Designed to capture customers, drivers, machines and implement history from a straightforward input, 
  // simplifying admin tasks while capturing all significant information necessary to monitor the company's well-being.

  constructor() { }

  ngOnInit() {
  }

  doSomething(id: string) {
    console.log("In portfolioComp and id = " + id);
    this.projectSelected.emit(id);
  }

}
