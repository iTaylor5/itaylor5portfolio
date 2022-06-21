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
  footerText: string = 'It is a long established fact that a reader will be distracted by the readable content.';
  footerTitle: string = 'Ready to get started?';
  footerDescription: string = 'It is a long established fact that a page when looking at its layout.';
  footerClass: string = 'blue-bg';
  public navItems: any = [
    {
      href: '#iq-home', title: 'Home',
      _is_active: true
    },
    { href: '#iq-about', title: 'About Us' },
    { href: '#iq-feature', title: 'Feature' },
    { href: '#iq-blog', title: 'Blog' },
    { href: '#iq-contact', title: 'Contact Us' }
  ];

  List: any[] = [
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/215.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'},
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/216.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'},
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/217.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
  ];

  titleSectionProp: any = {
    title: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
  };

  testimonialSectionProp: any = {
    class: 'pb-0'
  }
  
  testimonialList1: any[] = [
    { name: 'Alex xander', designation: 'CEO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/25.jpeg'},
    { name: 'Julia Aann', designation: 'COO Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/26.jpeg'},
    { name: 'Mac Znder', designation: 'Manager Sofbox', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.', image: './assets/sofbox-v2/images/home-1/27.jpeg'}
  ];

  constructor(private plugins: PluginsService) { }

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
