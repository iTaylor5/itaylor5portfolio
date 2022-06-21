import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-black-card-style4',
  templateUrl: './black-card-style4.component.html',
  styleUrls: ['./black-card-style4.component.css']
})
export class BlackCardStyle4Component implements OnInit {

  @Input() image: '';

  constructor() { }

  ngOnInit() {
  }

}
