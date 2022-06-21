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
    { href: '#iq-testimonial', title: 'Testimonial' },
    { href: '#iq-blog', title: 'Blog' },
    { href: '#iq-contact', title: 'Contact Us' }
  ];

  testimonialSectionProp: any = {
    class: 'iq-rpt-zero',
    id: 'iq-testimonial'
  }

  titleTractorTracker: any = {
    title: 'Tractor Tracker',
    description: "Designed to capture customers, drivers, machines and implement history from a straightforward input, simplifying admin tasks while capturing all significant information necessary to monitor the company's well-being."
  };

  tractorTractorList1: any[] = [
    { name: 'Dashboard', image: './assets/past-project-images/tractorTracker/dashboard-full.png' },
    { name: 'Implement Monthly Recap', image: './assets/past-project-images/tractorTracker/implements-4.png' },
    { name: 'Machines Selection', image: './assets/past-project-images/tractorTracker/machines-1.png' },
    { name: 'Farmer View', image: './assets/past-project-images/tractorTracker/farmer-full.png' }
  ];

  titleFinApp: any = {
    title: 'Financial Tracker',
    description: "Built to help a family monitor their finances and track their expenditure"
  };

  finAppList1: any[] = [
    { name: 'Dashboard', designation: 'CEO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/25.jpeg' },
    { name: 'Julia Aann', designation: 'COO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/26.jpeg' },
    { name: 'Mac Znder', designation: 'Manager Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/27.jpeg' }
  ];

  sizingCompany: any = {
    title: 'Computer Vision Sizing App',
    description: "Built to help a family monitor their finances and track their expenditure"
  };

  sizingCompanyList1: any[] = [
    { name: 'Dashboard', designation: 'CEO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/25.jpeg' },
    { name: 'Julia Aann', designation: 'COO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/26.jpeg' },
    { name: 'Mac Znder', designation: 'Manager Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/27.jpeg' }
  ];

  // tractorTractorList1: any[] = [
  //   { name: 'Dashboard', designation: 'CEO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/25.jpeg' },
  //   { name: 'Julia Aann', designation: 'COO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/26.jpeg' },
  //   { name: 'Mac Znder', designation: 'Manager Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/27.jpeg' }
  // ];

  List: any[] = [
    { name: 'Walhan123 Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/215.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' },
    { name: 'Walhan345 Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/216.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' },
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/217.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
  ];




  constructor(private plugins: PluginsService) {

  }

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

    if (id.localeCompare("tractorTracker") === 0) {
      console.log("tractorTracker");
      this.showSizingCompany = false;
      this.financeApp = false;
      this.tractorTracker = true;
    } else if (id.localeCompare("famFinApp") === 0) {
      console.log("famFinApp");
      this.showSizingCompany = false;
      this.financeApp = true;
      this.tractorTracker = false;
    } else {
      console.log("showSizingCompany");
      this.showSizingCompany = true;
      this.financeApp = false;
      this.tractorTracker = false;
    }
  }

}
