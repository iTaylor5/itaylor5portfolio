import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-card-style4',
  templateUrl: './v-two-card-style4.component.html',
  styleUrls: ['./v-two-card-style4.component.css']
})
export class VTwoCardStyle4Component implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() image: string;
  @Input() text: string;
  ngOnInit() {
  }

}
