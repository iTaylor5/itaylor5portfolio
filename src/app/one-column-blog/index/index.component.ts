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
  public navItems: any = [
    { href: '/saas-six', title: 'Home', is_link: true },
    { 
      href: '#', title: 'Pages',
      is_link: false,
      _is_active: false,
      children: true,
      child: [
        { href: '/about-us', title: 'About Us' },
        { href: '/services', title: 'Serivces' },
        { href: '/pricing', title: 'Pricing' },
        { href: '/careers', title: 'Careers' },
        { href: '/faq', title: 'FAQ' },
        { href: '/team', title: 'Team' },
      ]
    },
    { 
      href: '#', title: 'Portfolio',
      is_link: false,
      _is_active: false,
      children: true,
      child: [
        { href: '/portfolio-2-column', title: 'Portfolio 2 Columns' },
        { href: '/portfolio-3-column', title: 'Portfolio 3 Columns' },
        { href: '/portfolio-4-column', title: 'Portfolio 4 Columns' },
        { href: '/portfolio-5-column', title: 'Portfolio 5 Columns' },
        { href: '/portfolio-no-space', title: 'Portfolio No Space' },
        { href: '/portfolio-details', title: 'Portfolio Details' },
      ]
    },
    { href: '#', title: 'Blog',
      is_link: false,
      _is_active: true,
      children: true,
      child: [
        { href: '/blog', title: 'Blog' },
        { href: '/blog-details', title: 'Blog Details' },
        { href: '/one-column-blog', title: 'One Column Blog' },
        { href: '/two-column-blog', title: 'Two Column Blog' },
        { href: '/three-column-blog', title: 'Three Column Blog' },
        { href: '/left-sidebar-grid', title: 'Left Sidebar Grid' },
        { href: '/right-sidebar-grid', title: 'Right Sidebar Grid' },
      ]
    },
    { href: '/contact-us', title: 'Contact Us', is_link: true }
  ];

  blogList: any[] = [
    { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: './assets/sofbox-v2/images/home-1/16.jpg'},
    { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: './assets/sofbox-v2/images/home-1/17.jpg'},
    { title: 'Life Lack Meaning', description: 'It is a long established fact that a reader will be distracted by the readable.', datetime: 'November 28, 2019', image: './assets/sofbox-v2/images/home-1/18.jpg'}
  ]

  List: any[] = [
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/215.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'},
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/216.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'},
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/217.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
  ];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    // Init all plugins...
    const current = this;
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function () {
      current.plugins.index();
    }, 200);
  }

}
