import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SofboxModule } from './sofbox/sofbox.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormService } from './sofbox/components/contact-form/contact-form.service';
import { SaasTwoModule } from './saas-two/saas-two.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SofboxModule,
    RecaptchaModule,
    HttpClientModule,
    SaasTwoModule,

  ],
  providers: [
    ContactFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
