import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-black-card-style6',
  templateUrl: './black-card-style6.component.html',
  styleUrls: ['./black-card-style6.component.css']
})
export class BlackCardStyle6Component implements OnInit {

  @Input() className: any = '';

  constructor() { }

  ngOnInit() {
  }

}
