import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-black-listing-style1',
  templateUrl: './black-listing-style1.component.html',
  styleUrls: ['./black-listing-style1.component.css']
})
export class BlackListingStyle1Component implements OnInit {

  @Input() className: any = '';

  constructor() { }

  ngOnInit() {
  }



}
