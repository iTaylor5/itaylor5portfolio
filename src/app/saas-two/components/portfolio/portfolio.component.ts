import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  showSizingCompany: boolean = false;
  tractorTracker: boolean = true;
  financeApp: boolean = false;

  titleSectionProp: any = {
    title: 'Recent Works',
    description: 'From Python and AI modules to Java and Angular'
  };

  testimonialSectionProp: any = {
    class: 'iq-rpt-zero',
    id: 'iq-testimonial'
  }

  // Tractor Tracker
  titleTractorTracker: any = {
    title: 'Tractor Tracker',
    description: "Is an application I designed and built for Ukhoziagri, a leading agriculture company that specializes in equipment rentals, to handle all their job and customer data. The application optimizes their business by simplifying administrative tasks and centralizing all data.",
    images: ['./assets/pictures/angular.png', './assets/pictures/spring.png', './assets/pictures/mysql.png']
  };

  tractorTractorList1: any[] = [
    { name: 'Dashboard', image: './assets/images/past-project-images/tractorTracker/dashboard-full.png' },
    { name: 'Implement Monthly Recap', image: './assets/images/past-project-images/tractorTracker/implements-4.png' },
    { name: 'Machines Selection', image: './assets/images/past-project-images/tractorTracker/machines-1.png' },
    { name: 'Farmer View', image: './assets/images/past-project-images/tractorTracker/farmer-full.png' }
  ];

  // FinApp
  titleFinApp: any = {
    title: 'Family Finance Tracker',
    description: "I began building this application to help my personnel finances. I am now in the process of launching it as a SaaS application.",
    images: ['./assets/pictures/angular.png', './assets/pictures/spring.png', './assets/pictures/mysql.png']
  };

  finAppList: any[] = [
    { name: 'Dashboard', image: './assets/images/past-project-images/finApp/DD-full.png' },
    { name: 'Categories', image: './assets/images/past-project-images/finApp/cat-full.png' },
    { name: 'Expenditure Histroy', image: './assets/images/past-project-images/finApp/exp-history-full.png' }
  ];

  sizingCompany: any = {
    title: 'Computer Vision Sizing App',
    description: "This was chosen as our final project in my Software Engineering degree. We were tasked with building an application that would be able to extract body measurements of a figure in an image provided to us by the frontend site. To accomplish this, we used AI modules to clean the image and carry out segmentation on the figure. E-commerce sites use this software to create profiles for users who would then only be shown clothing that fits them.",
    images: ['./assets/pictures/python.jpeg']
  };

  sizingCompanyList1: any[] = [
    { name: 'Dashboard', image: './assets/images/past-project-images/sizingCompany/1.png' },
    { name: 'Julia Aann', image: './assets/images/past-project-images/sizingCompany/2.png' },
    { name: 'Mac Znder', image: './assets/images/past-project-images/sizingCompany/3.png' }
  ];

  List: any[] = [
    {
      title: 'Tractor Tracker',
      description: "Built for an equipment rental supplier in Zimbabwe to help manage rentals. ",
      image: './assets/images/past-project-images/tractorTracker/dashboard-full.png',
      id: "tractorTracker"
    },
    {
      title: 'Family Finance App',
      description: 'Built to help families monitor their expenditure in multi currencies.',
      image: './assets/images/past-project-images/finApp/DD-full.png',
      id: "famFinApp"
    },
    {
      title: 'Computer Vision Sizing App',
      description: 'Edged based system to calculates a figures dimension in an image.',
      image: './assets/images/past-project-images/sizingCompany/img1.png',
      id: "sizingCompany"
    }
  ];

  title: any = this.titleTractorTracker;
  imageList: any = this.tractorTractorList1;


  constructor() { }

  ngOnInit() {
  }

  projectSelected(id: string) {
    console.log("In portfolioComp and projectSelected is " + id);
    // this.projectSelected.emit(id);

    if (id.localeCompare("tractorTracker") === 0) {
      console.log("tractorTracker");

      this.title = this.titleTractorTracker;
      this.imageList = this.tractorTractorList1;
      // this.showSizingCompany = false;
      // this.financeApp = false;
      // this.tractorTracker = true;
    } else if (id.localeCompare("famFinApp") === 0) {
      console.log("famFinApp");

      // this.title = null;
      // this.imageList = null;

      this.title = this.titleFinApp;
      this.imageList = this.finAppList;
      // this.showSizingCompany = false;
      // this.financeApp = true;
      // this.tractorTracker = false;
    } else {
      console.log("showSizingCompany");
      this.title = this.sizingCompany;
      this.imageList = this.sizingCompanyList1;
      // this.showSizingCompany = true;
      // this.financeApp = false;
      // this.tractorTracker = false;
    }

  }

}
