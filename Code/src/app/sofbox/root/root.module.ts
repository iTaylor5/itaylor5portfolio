import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';

import { RootComponent } from './root.component';


@NgModule({
  declarations: [ RootComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RootComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class RootModule { 
  
}
