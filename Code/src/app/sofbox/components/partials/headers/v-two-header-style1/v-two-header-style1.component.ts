import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-v-two-header-style1',
  templateUrl: './v-two-header-style1.component.html',
  styleUrls: ['./v-two-header-style1.component.css']
})
export class VTwoHeaderStyle1Component implements OnInit {

  @Input() logoImg: string;

  @Input() navItemList: any[];

  @Input() className: string;

  @Input() styledLogo = true;

  @Input() logoWhite: string;
  @Input() logoClass: string;

  constructor() { }

  ngOnInit() {
  }

  jumpTo(href) {
    $('html, body').stop().animate({
      scrollTop: $(href).offset().top
    }, 1500);
  }

  toggleClass() {
    $(".menu-btn").click(function() {
      $(this).toggleClass("is-active");
    });
  }

}
