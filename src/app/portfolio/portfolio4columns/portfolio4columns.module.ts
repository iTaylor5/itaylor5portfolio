import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../../sofbox/sofbox.module';
import { Portfolio4columnsComponent } from './portfolio4columns.component';

const routes: Routes = [
  {
    path: '',
    component: Portfolio4columnsComponent,
  }
]

@NgModule({
  declarations: [Portfolio4columnsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})

export class Portfolio4columnsModule { }
