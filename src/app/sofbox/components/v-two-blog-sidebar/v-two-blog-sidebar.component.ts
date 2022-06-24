import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-blog-sidebar',
  templateUrl: './v-two-blog-sidebar.component.html',
  styleUrls: ['./v-two-blog-sidebar.component.css']
})
export class VTwoBlogSidebarComponent implements OnInit {

  @Input() recentPostList: any = []; 
  @Input() categoryList: any = [];
   
  constructor() { }

  ngOnInit(): void {
  }

}
