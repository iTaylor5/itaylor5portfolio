import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-case-studies',
  templateUrl: './v-two-case-studies.component.html',
  styleUrls: ['./v-two-case-studies.component.css']
})
export class VTwoCaseStudiesComponent implements OnInit {

  @Input() List: any = [];

  constructor() { }

  ngOnInit() {
  }

}
