import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-banner-style1',
  templateUrl: './v-two-banner-style1.component.html',
  styleUrls: ['./v-two-banner-style1.component.css']
})
export class VTwoBannerStyle1Component implements OnInit {

  @Input() title: any;

  constructor() { }

  ngOnInit(): void {
  }

}
