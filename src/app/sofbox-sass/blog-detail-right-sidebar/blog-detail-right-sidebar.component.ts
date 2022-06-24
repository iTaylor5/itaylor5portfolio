import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PluginsService} from '../../sofbox/plugins.service';
// @ts-ignore
import logoImg from '../../../assets/sofbox-sass-black/images/logo-black.png';

@Component({
  selector: 'app-blog-detail-right-sidebar',
  templateUrl: './blog-detail-right-sidebar.component.html',
  styleUrls: ['./blog-detail-right-sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogDetailRightSidebarComponent implements OnInit {

  constructor(private plugins: PluginsService) { }
  public navLogo: string = logoImg;

  public navItems: any = [
    { href: '/sofbox-saas', title: 'Home', is_link: true },
    { href: '/sofbox-saas', title: 'Service', is_link: true },
    { href: '/sofbox-saas', title: 'About Us', is_link: true },
    { href: '/sofbox-saas', title: 'Feature', is_link: true },
    { href: '/sofbox-saas', title: 'Team', is_link: true },
    { href: '/sofbox-saas', title: 'Testimonial', is_link: true },
    { href: '/sofbox-saas', title: 'Pricing', is_link: true },
    { href: '/sofbox-saas', title: 'Blog', is_link: true,
      _is_active : false,
      children: true,
      child: [
        { href: '/sofbox-saas/blog-list', title: 'All Blog'},
        { href: '/sofbox-saas/blog-detail', title: 'Blog Detail'},
        { href: '/sofbox-saas/blog-detail-left-sidebar', title: 'Blog Details Left Sidebar'},
        { href: '/sofbox-saas/blog-detail-right-sidebar', title: 'Blog Details Right Sidebar'},
        { href: '/sofbox-saas/blog-list-left-sidebar', title: 'Blog Left Sidebar'},
        { href: '/sofbox-saas/blog-list-right-sidebar', title: 'Blog Right Sidebar'},
      ]
    },
    { href: '#pages', title: 'Pages',
      _is_active : true,
      children: true,
      child: [
        { href: '/sofbox-saas/404', title: '404 Error'},
        { href: '/sofbox-saas/coming-soon', title: 'Coming Soon'},
        { href: '/sofbox-saas/maintenance', title: 'Maintenance'},
      ]
    },
    { href: '/sofbox-saas/contact-us', title: 'Contact Us', is_link: true }
  ];

  ngOnInit() {
    // Init all plugins...
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('main-bg');
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
}
