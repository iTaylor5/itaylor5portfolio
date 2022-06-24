import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-black-pagination',
  templateUrl: './black-pagination.component.html',
  styleUrls: ['./black-pagination.component.css']
})
export class BlackPaginationComponent implements OnInit {

  @Input() pagination: any;
  @Input() current: number;
  @Input() nextUrl: string;
  @Input() previousUrl: string;
  @Input() firstUrl: string;
  @Input() lastUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
