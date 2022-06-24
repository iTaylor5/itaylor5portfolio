import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { SliderComponent } from './components/slider/slider.component';
import { DetailComponent } from './components/detail/detail.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
]

@NgModule({
  declarations: [IndexComponent, SliderComponent, DetailComponent, SwiperComponent, CaseStudyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})
export class PortfolioDetailsModule { }
