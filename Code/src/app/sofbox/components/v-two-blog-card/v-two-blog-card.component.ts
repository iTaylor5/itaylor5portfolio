import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-blog-card',
  templateUrl: './v-two-blog-card.component.html',
  styleUrls: ['./v-two-blog-card.component.css']
})
export class VTwoBlogCardComponent implements OnInit {

  @Input() blogList: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
