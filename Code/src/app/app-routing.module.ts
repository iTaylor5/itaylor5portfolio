import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  /*{ path: '', loadChildren: './landing-page4/landing-page4.module#LandingPage4Module' },*/
  // { path: '', component: RootComponent },
  { path: '', loadChildren: () => import('./saas-two/saas-two.module').then(m => m.SaasTwoModule) },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
