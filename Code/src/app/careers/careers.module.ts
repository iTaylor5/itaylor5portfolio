import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { ServiceComponent } from './components/service/service.component';
import { PositionComponent } from './components/position/position.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
]

@NgModule({
  declarations: [IndexComponent, ServiceComponent, PositionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})
export class CareersModule { }
