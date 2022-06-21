import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { SliderModule } from './components/slider/slider.module';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FeaturesComponent } from './components/features/features.component';
import { MapComponent } from './components/map/map.component';
import { CounterComponent } from './components/counter/counter.component';
import { BlogComponent } from './components/blog/blog.component';
import { ServiceTabsComponent } from './components/service-tabs/service-tabs.component';



const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [IndexComponent, AboutComponent, PricingComponent, FeaturesComponent, MapComponent, CounterComponent, BlogComponent, ServiceTabsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SliderModule,
    CountToModule,
    SofboxModule
  ]
})
export class CloudHostingModule { }
