import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { SliderModule } from './components/slider/slider.module';
import { FeaturesComponent } from './components/features/features.component';
import { TipsTrickComponent } from './components/tips-trick/tips-trick.component';
import { TipsTrick1Component } from './components/tips-trick1/tips-trick1.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [IndexComponent, FeaturesComponent, TipsTrickComponent, TipsTrick1Component, PortfolioComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SliderModule,
    SofboxModule
  ]
})
export class SaasTwoModule { }
