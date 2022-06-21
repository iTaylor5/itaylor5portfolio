import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './components/details/details.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
]

@NgModule({
  declarations: [IndexComponent, DetailsComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule
  ]
})
export class BlogDetailsModule { }
