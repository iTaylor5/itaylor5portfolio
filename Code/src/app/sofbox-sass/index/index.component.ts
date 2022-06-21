import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// @ts-ignore
import logoImg from '../../../assets/sofbox-sass-black/images/logo-black.png';
import { PluginsService } from '../../sofbox/plugins.service';
import { subHeader } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  constructor(private plugins: PluginsService) { }

  public navLogo: string = logoImg;

  public navItems: any = [
    {
      href: '/sofbox-saas', title: 'Home',
      _is_active: true,
      is_link: true
    },
    { href: '#how-it-works', title: 'Service', is_link: false },
    { href: '#about-us', title: 'About Us', is_link: false },
    { href: '#feature', title: 'Feature', is_link: false },
    { href: '#team', title: 'Team', is_link: false },
    { href: '#testimonial', title: 'Testimonial', is_link: false },
    { href: '#pricing', title: 'Pricing', is_link: false },
    {
      href: '#blog', title: 'Blog',
      is_link: false,
      _is_active: false,
      children: true,
      child: [
        { href: '/sofbox-saas/blog-list', title: 'All Blog' },
        { href: '/sofbox-saas/blog-detail', title: 'Blog Detail' },
        { href: '/sofbox-saas/blog-detail-left-sidebar', title: 'Blog Details Left Sidebar' },
        { href: '/sofbox-saas/blog-detail-right-sidebar', title: 'Blog Details Right Sidebar' },
        { href: '/sofbox-saas/blog-list-left-sidebar', title: 'Blog Left Sidebar' },
        { href: '/sofbox-saas/blog-list-right-sidebar', title: 'Blog Right Sidebar' },
      ]
    },
    {
      href: '#pages', title: 'Pages',
      _is_active: true,
      children: true,
      child: [
        { href: '/sofbox-saas/404', title: '404 Error' },
        { href: '/sofbox-saas/coming-soon', title: 'Coming Soon' },
        { href: '/sofbox-saas/maintenance', title: 'Maintenance' },
      ]
    },
    { href: '/sofbox-saas/contact-us', title: 'Contact Us', is_link: true }
  ];

  ngOnInit() {
    // Init all plugins...
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('main-bg');
    const current = this;
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function () {
      current.plugins.index();
    }, 200);
  }

}
