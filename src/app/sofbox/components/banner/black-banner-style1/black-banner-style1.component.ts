import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-black-banner-style1',
  templateUrl: './black-banner-style1.component.html',
  styleUrls: ['./black-banner-style1.component.css']
})
export class BlackBannerStyle1Component implements OnInit {

  constructor() { }

  @Input() title: any;
  
  ngOnInit() {
  }

}
