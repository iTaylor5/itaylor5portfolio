import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// @ts-ignore
import logoImg from '../../../assets/sofbox-v2/images/logo-color.png';
// @ts-ignore
import footerLogo from '../../../assets/sofbox-v2/images/home-2/logo-white.png';
import { PluginsService } from '../../sofbox/plugins.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  public navLogo: string = logoImg;
  public footerLogo: string = footerLogo;
  footerText: string = 'itaylor5se@gmail.com';
  footerTitle: string = 'Lets chat';
  footerDescription: string = 'itaylor5se@gmail.com';

  showSizingCompany: boolean = false;
  tractorTracker: boolean = false;
  financeApp: boolean = false;



  public navItems: any = [
    {
      href: '#iq-home', title: 'Home',
      _is_active: true
    },
    { href: '#iq-feature', title: 'Feature' },
    { href: '#iq-portfolio', title: 'Portfolio' },
    { href: '#iq-gallery', title: 'Gallery' },
    { href: '#iq-blog', title: 'Blog' },
    { href: '#iq-contact', title: 'Contact Us' }
  ];

  List: any[] = [
    { name: 'Walhan123 Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/215.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' },
    { name: 'Walhan345 Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/216.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' },
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/217.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
  ];


  tractorTrackerList: any[] = [
    {
      title: 'Tractor Tracker',
      desc: 'Dashboard',
      image: './assets/images/past-project-images/tractorTracker/dashboard-full-scaled.png',
      class: 'tractorTracker print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Tractor Tracker',
      desc: 'Customer Tables',
      image: './assets/images/past-project-images/tractorTracker/farmers-full.png',
      class: 'tractorTracker print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Tractor Tracker',
      desc: 'Customer Overview',
      image: './assets/images/past-project-images/tractorTracker/farmer-full.png',
      class: 'tractorTracker print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Tractor Tracker',
      desc: 'Machines Table',
      image: './assets/images/past-project-images/tractorTracker/machines-full.png',
      class: 'tractorTracker print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Tractor Tracker',
      desc: 'Machines Overview',
      image: './assets/images/past-project-images/tractorTracker/machines-full-3.png',
      class: 'tractorTracker print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Tractor Tracker',
      desc: 'Machines Monthly Overview',
      image: './assets/images/past-project-images/tractorTracker/machines-month.png',
      class: 'tractorTracker print-branding',
      link: '/portfolio-details'
    },

    {
      title: 'Tractor Tracker',
      desc: 'Implement Selection',
      image: './assets/images/past-project-images/tractorTracker/implements-full.png',
      class: 'tractorTracker print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Tractor Tracker',
      desc: 'Implement Overview',
      image: './assets/images/past-project-images/tractorTracker/implement-full.png',
      class: 'tractorTracker print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Tractor Tracker',
      desc: 'Implement Monthly View',
      image: './assets/images/past-project-images/tractorTracker/impl-monthly.png',
      class: 'tractorTracker print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Finance App',
      desc: 'Dashboard',
      image: './assets/images/past-project-images/finApp/DD-full.png',
      class: 'finApp print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Finance App',
      desc: 'Submit an Expense',
      image: './assets/images/past-project-images/finApp/submit-exp-full.png',
      class: 'finApp print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Finance App',
      desc: 'History',
      image: './assets/images/past-project-images/finApp/exp-history-full.png',
      class: 'finApp print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Finance App',
      desc: 'Categories',
      image: './assets/images/past-project-images/finApp/cat-full-1.png',
      class: 'finApp print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Finance App',
      desc: 'Adding a Category',
      image: './assets/images/past-project-images/finApp/adding-cat.png',
      class: 'finApp print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Finance App',
      desc: 'Accounts Overview',
      image: './assets/images/past-project-images/finApp/acc-full.png',
      class: 'finApp print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Sizing App',
      desc: 'Image Received',
      image: './assets/images/past-project-images/sizingCompany/1.png',
      class: 'sizingApp print-branding',
      link: '/portfolio-details'
    },
    {
      title: 'Sizing App',
      desc: 'Result After Processing',
      image: './assets/images/past-project-images/sizingCompany/scaled.png',
      class: 'sizingApp print-branding',
      link: '/portfolio-details'
    },
    // {
    //   title: 'Sizing App',
    //   desc: 'Print — Branding',
    //   image: './assets/images/past-project-images/sizingCompany/img1.png',
    //   class: 'sizingApp print-branding',
    //   link: '/portfolio-details'
    // },
    {
      title: 'Sizing App',
      desc: 'Result After Processing',
      image: './assets/images/past-project-images/sizingCompany/img1.png',
      class: 'sizingApp print-branding',
      link: '/portfolio-details'
    },
    // {
    //   title: 'Sizing App',
    //   desc: 'Sequence Diagram',
    //   image: './assets/images/past-project-images/sizingCompany/sequenceDiagram.png',
    //   class: 'sizingApp print-branding',
    //   link: '/portfolio-details'
    // },


  ]


  titleSectionProp: any = {
    title: 'Gallery of Recent Work',
    description: ''
  };


  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    // Init all plugins...
    const current = this;
    current.plugins.revolutionSlider();
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function () {
      current.plugins.index();
    }, 200);

    this.tractorTracker = true;
  }

  projectSelected(id: string) {
    console.log("Back in index and the project selected is, " + id);

    // if (id.localeCompare("tractorTracker") === 0) {
    //   console.log("tractorTracker");
    //   this.showSizingCompany = false;
    //   this.financeApp = false;
    //   this.tractorTracker = true;
    // } else if (id.localeCompare("famFinApp") === 0) {
    //   console.log("famFinApp");
    //   this.showSizingCompany = false;
    //   this.financeApp = true;
    //   this.tractorTracker = false;
    // } else {
    //   console.log("showSizingCompany");
    //   this.showSizingCompany = true;
    //   this.financeApp = false;
    //   this.tractorTracker = false;
    // }
  }

}
