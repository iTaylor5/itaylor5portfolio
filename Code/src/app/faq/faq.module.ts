import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { FaqComponent } from './faq.component';
import { FaqTabComponent } from './components/faq-tab/faq-tab.component';


const routes: Routes = [
  {
    path: '',
    component: FaqComponent
  }
]

@NgModule({
  declarations: [FaqComponent, FaqTabComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})
export class FaqModule { }
