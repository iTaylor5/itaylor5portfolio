import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slider2Component } from './slider2.component';



@NgModule({
  declarations: [Slider2Component],
  imports: [
    CommonModule
  ],
  exports: [
    Slider2Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Slider2Module { }
