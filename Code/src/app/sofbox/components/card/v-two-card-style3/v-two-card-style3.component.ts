import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-card-style3',
  templateUrl: './v-two-card-style3.component.html',
  styleUrls: ['./v-two-card-style3.component.css']
})
export class VTwoCardStyle3Component implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() icon: string;
  @Input() class: string;
  ngOnInit() {
  }

}
