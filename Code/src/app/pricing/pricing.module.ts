import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { PlanComponent } from './components/plan/plan.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
]

@NgModule({
  declarations: [IndexComponent, PlanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})

export class PricingModule { }
