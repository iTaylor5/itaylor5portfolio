import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-progressbar',
  templateUrl: './v-two-progressbar.component.html',
  styleUrls: ['./v-two-progressbar.component.css']
})
export class VTwoProgressbarComponent implements OnInit {

  @Input() title: string;
  @Input() percentage: string;
  @Input() animate: string;
  @Input() hoverClass: string;
  constructor() { }

  ngOnInit() {
  }

}
