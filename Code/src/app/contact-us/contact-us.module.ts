import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactMapComponent } from './components/contact-map/contact-map.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
]

@NgModule({
  declarations: [IndexComponent, ContactInfoComponent, ContactMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})
export class ContactUsModule { }
