import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../../sofbox/sofbox.module';
import { Portfolio5columnsComponent } from './portfolio5columns.component';

const routes: Routes = [
  {
    path: '',
    component: Portfolio5columnsComponent,
  }
]

@NgModule({
  declarations: [Portfolio5columnsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})

export class Portfolio5columnsModule { }
