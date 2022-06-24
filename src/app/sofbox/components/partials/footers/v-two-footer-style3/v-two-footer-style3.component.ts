import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-footer-style3',
  templateUrl: './v-two-footer-style3.component.html',
  styleUrls: ['./v-two-footer-style3.component.css']
})
export class VTwoFooterStyle3Component implements OnInit {

  @Input() footerLogo: string;
  @Input() socailLink: any[];

  constructor() { }

  ngOnInit() {
  }

}
