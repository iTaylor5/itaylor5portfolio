import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-card-style2',
  templateUrl: './v-two-card-style2.component.html',
  styleUrls: ['./v-two-card-style2.component.css']
})
export class VTwoCardStyle2Component implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() icon: string;
  ngOnInit() {
  }

}
