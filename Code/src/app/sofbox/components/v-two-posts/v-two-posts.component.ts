import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-posts',
  templateUrl: './v-two-posts.component.html',
  styleUrls: ['./v-two-posts.component.css']
})
export class VTwoPostsComponent implements OnInit {

  @Input() postList: any = [];
  constructor() { }

  ngOnInit() {
  }

}
