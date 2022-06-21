import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-card-style1',
  templateUrl: './v-two-card-style1.component.html',
  styleUrls: ['./v-two-card-style1.component.css']
})
export class VTwoCardStyle1Component implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;

  ngOnInit() {
  }

}
