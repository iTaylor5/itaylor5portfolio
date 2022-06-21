import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-footer-style2',
  templateUrl: './v-two-footer-style2.component.html',
  styleUrls: ['./v-two-footer-style2.component.css']
})
export class VTwoFooterStyle2Component implements OnInit {

  @Input() footerLogo: string;
  @Input() footerText: string;
  @Input() footerTitle: string;
  @Input() footerDescription: string;
  @Input() footerClass: string;
  @Input() buttonClass: string;
  constructor() { }

  ngOnInit() {
  }

}
