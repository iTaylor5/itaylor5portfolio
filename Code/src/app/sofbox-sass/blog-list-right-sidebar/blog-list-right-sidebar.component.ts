import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PluginsService} from '../../sofbox/plugins.service';
// @ts-ignore
import logoImg from '../../../assets/sofbox-sass-black/images/logo-black.png';

@Component({
  selector: 'app-blog-list-right-sidebar',
  templateUrl: './blog-list-right-sidebar.component.html',
  styleUrls: ['./blog-list-right-sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogListRightSidebarComponent implements OnInit {

  constructor(private plugins: PluginsService) { }
  public navLogo: string = logoImg;

  public navItems: any = [
    { href: '/sofbox-saas', title: 'Home', is_link: true},
    { href: '/sofbox-saas', title: 'Service', is_link: true },
    { href: '/sofbox-saas', title: 'About Us', is_link: true },
    { href: '/sofbox-saas', title: 'Feature', is_link: true },
    { href: '/sofbox-saas', title: 'Team', is_link: true },
    { href: '/sofbox-saas', title: 'Testimonial', is_link: true },
    { href: '/sofbox-saas', title: 'Pricing', is_link: true},
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

  public pagination = {
    first_link: '',
    last_link: '',
    previous_link: '',
    next_link: '',
    current_page: 2,
    pages: [
      {
        page: 1,
        page_link: ''
      },
      {
        page: 2,
        page_link: ''
      },
      {
        page: 3,
        page_link: ''
      },
      {
        page: 4,
        page_link: ''
      },
    ],
  };

  public blogList: any = [
    {
      media: './assets/sofbox-sass-black/images/blog/03.jpg',
      title: 'Fully Dedicated Finding',
      // tslint:disable-next-line:max-line-length
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      createddate: 'April 05, 2019',
      likes: '60',
      comments: '20'
    },
    {
      media: './assets/sofbox-sass-black/images/blog/03.jpg',
      title: 'Fully Dedicated Finding',
      // tslint:disable-next-line:max-line-length
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      createddate: 'April 05, 2019',
      likes: '60',
      comments: '20'
    },
    {
      media: './assets/sofbox-sass-black/images/blog/03.jpg',
      title: 'Fully Dedicated Finding',
      // tslint:disable-next-line:max-line-length
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      createddate: 'April 05, 2019',
      likes: '60',
      comments: '20'
    },
    {
      media: './assets/sofbox-sass-black/images/blog/03.jpg',
      title: 'Fully Dedicated Finding',
      // tslint:disable-next-line:max-line-length
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      createddate: 'April 05, 2019',
      likes: '60',
      comments: '20'
    },
    {
      media: './assets/sofbox-sass-black/images/blog/03.jpg',
      title: 'Fully Dedicated Finding',
      // tslint:disable-next-line:max-line-length
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      createddate: 'April 05, 2019',
      likes: '60',
      comments: '20'
    },
    {
      media: './assets/sofbox-sass-black/images/blog/03.jpg',
      title: 'Fully Dedicated Finding',
      // tslint:disable-next-line:max-line-length
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      createddate: 'April 05, 2019',
      likes: '60',
      comments: '20'
    },
    {
      media: './assets/sofbox-sass-black/images/blog/03.jpg',
      title: 'Fully Dedicated Finding',
      // tslint:disable-next-line:max-line-length
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      createddate: 'April 05, 2019',
      likes: '60',
      comments: '20'
    },
    {
      media: './assets/sofbox-sass-black/images/blog/03.jpg',
      title: 'Fully Dedicated Finding',
      // tslint:disable-next-line:max-line-length
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      createddate: 'April 05, 2019',
      likes: '60',
      comments: '20'
    },
  ];


  ngOnInit() {
    // Init all plugins...
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('main-bg');
    const current = this;
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
