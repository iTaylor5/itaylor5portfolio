import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../../sofbox/sofbox.module';
import { PortfolioNoSpaceComponent } from './portfolio-no-space.component';


const routes: Routes = [
  {
    path: '',
    component: PortfolioNoSpaceComponent,
  }
]

@NgModule({
  declarations: [PortfolioNoSpaceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})
export class PortfolioNoSpaceModule { }
