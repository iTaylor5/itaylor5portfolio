import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-two-section-title',
  templateUrl: './v-two-section-title.component.html',
  styleUrls: ['./v-two-section-title.component.css']
})
export class VTwoSectionTitleComponent implements OnInit {

  @Input() titleSectionProp: any;

  constructor() { }

  ngOnInit() {
  }

}
