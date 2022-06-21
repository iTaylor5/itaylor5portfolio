import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { FeaturesComponent } from './components/features/features.component';
import { DevelopmentComponent } from './components/development/development.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { BlogComponent } from './components/blog/blog.component';
import { SliderModule } from './components/slider/slider.module'


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [IndexComponent, FeaturesComponent, DevelopmentComponent, AboutComponent, ServicesComponent, PricingComponent, BlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
    SliderModule
  ]
})
export class HelpDeskModule { }
