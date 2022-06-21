import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../../sofbox/sofbox.module';
import { Portfolio2columnsComponent } from './portfolio2columns.component';

const routes: Routes = [
  {
    path: '',
    component: Portfolio2columnsComponent,
  }
]

@NgModule({
  declarations: [Portfolio2columnsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})

export class Portfolio2columnsModule { }
