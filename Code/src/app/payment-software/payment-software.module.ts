import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountToModule } from 'angular-count-to';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FeaturesComponent } from './components/features/features.component';
import { CounterComponent } from './components/counter/counter.component';
import { TeamComponent } from './components/team/team.component';
import { Slider2Module } from './components/slider2/slider2.module'
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }

];

@NgModule({
  declarations: [IndexComponent, AboutComponent, ServicesComponent, FeaturesComponent, CounterComponent, TeamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
    CountToModule,
    Slider2Module
  ]
})
export class PaymentSoftwareModule { }
