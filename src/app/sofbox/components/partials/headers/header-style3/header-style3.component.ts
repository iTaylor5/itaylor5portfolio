import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header-style3',
  templateUrl: './header-style3.component.html',
  styleUrls: ['./header-style3.component.css']
})
export class HeaderStyle3Component implements OnInit {

  @Input() logoImg: string;

  @Input() navItemList: any[];

  @Input() className: string;

  @Input() styledLogo = true;

  constructor() { }

  ngOnInit() {
  }

  jumpTo(href) {
    $('html, body').stop().animate({
      scrollTop: $(href).offset().top
    }, 1500);
  }

}
