import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-footer-style1',
  templateUrl: './v-two-footer-style1.component.html',
  styleUrls: ['./v-two-footer-style1.component.css']
})
export class VTwoFooterStyle1Component implements OnInit {

  @Input() footerText: string;
  @Input() footerLogo: string;
  
  constructor() { }

  ngOnInit() {
  }

}
