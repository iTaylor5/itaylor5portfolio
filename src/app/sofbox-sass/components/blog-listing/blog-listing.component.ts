import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogListingComponent implements OnInit {

  constructor() { }

  @Input() lg: any = 6;

  @Input() md: any = 6;

  @Input() blogList: any;

  ngOnInit() {
  }

}
