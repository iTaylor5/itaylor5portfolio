import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SofboxModule} from '../sofbox/sofbox.module';
import {CountToModule} from 'angular-count-to';
import { IndexComponent } from './index/index.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutFeatureComponent } from './components/about-feature/about-feature.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
import { TeamComponent } from './components/team/team.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientComponent } from './components/client/client.component';
import { SliderComponent } from './components/slider/slider.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { BlogListingComponent } from './components/blog-listing/blog-listing.component';
import { BlogDetailRightSidebarComponent } from './blog-detail-right-sidebar/blog-detail-right-sidebar.component';
import { BlogDetailLeftSidebarComponent } from './blog-detail-left-sidebar/blog-detail-left-sidebar.component';
import { BlogListLeftSidebarComponent } from './blog-list-left-sidebar/blog-list-left-sidebar.component';
import { BlogListRightSidebarComponent } from './blog-list-right-sidebar/blog-list-right-sidebar.component';
import { DetailComponent } from './components/detail/detail.component';



const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'blog-list',
    component: BlogListComponent,
  },
  {
    path: 'blog-list-left-sidebar',
    component: BlogListLeftSidebarComponent,
  },
  {
    path: 'blog-list-right-sidebar',
    component: BlogListRightSidebarComponent,
  },
  {
    path: 'blog-detail',
    component: BlogDetailComponent,
  },
  {
    path: 'blog-detail-left-sidebar',
    component: BlogDetailLeftSidebarComponent,
  },
  {
    path: 'blog-detail-right-sidebar',
    component: BlogDetailRightSidebarComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent,
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  }
];

@NgModule({
  declarations: [
    IndexComponent,
    BlogListComponent,
    BlogDetailComponent,
    HowItWorksComponent,
    AboutUsComponent,
    AboutFeatureComponent,
    WhyChooseUsComponent,
    FeatureComponent,
    ScreenshotsComponent,
    TeamComponent,
    NotFoundComponent,
    ComingSoonComponent,
    MaintenanceComponent,
    ContactUsComponent,
    FooterComponent,
    ClientComponent,
    SliderComponent,
    BlogsComponent,
    TestimonialComponent,
    PricingComponent,
    BlogListingComponent,
    BlogDetailRightSidebarComponent,
    BlogDetailLeftSidebarComponent,
    BlogListLeftSidebarComponent,
    BlogListRightSidebarComponent,
    DetailComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SofboxModule,
    CountToModule
  ]
})
export class SofboxSassModule { }
