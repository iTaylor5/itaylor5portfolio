import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { FeatureComponent } from './components/feature/feature.component';
import { TipsTrick1Component } from './components/tips-trick1/tips-trick1.component';
import { TipsTrick2Component } from './components/tips-trick2/tips-trick2.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
]

@NgModule({
  declarations: [IndexComponent, FeatureComponent, TipsTrick1Component, TipsTrick2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})
export class ServicesModule { }
