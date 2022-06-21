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

  titleSectionProp: any = {
    title: 'Tractor Tracker',
    description: "Designed to capture customers, drivers, machines and implement history from a straightforward input, simplifying admin tasks while capturing all significant information necessary to monitor the company's well-being."
  };

  titleSectionProp1: any = {
    title: 'Financial Tracker',
    description: "Built to help a family monitor their finances and track their expenditure"
  };

  List: any[] = [
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/215.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' },
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/216.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' },
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/217.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
  ];

  testimonialSectionProp: any = {
    class: 'iq-rpt-zero',
    id: 'iq-testimonial'
  }

  testimonialList1: any[] = [
    { name: 'Dashboard', designation: 'CEO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/25.jpeg' },
    { name: 'Julia Aann', designation: 'COO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/26.jpeg' },
    { name: 'Mac Znder', designation: 'Manager Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/27.jpeg' }
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
  }

}
