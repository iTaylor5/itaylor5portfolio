import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-black-section-title2',
  templateUrl: './black-section-title2.component.html',
  styleUrls: ['./black-section-title2.component.css']
})
export class BlackSectionTitle2Component implements OnInit {

  @Input() title: any;
  @Input() subtitle: any;
  @Input() titlecontent: any;
  constructor() { }

  ngOnInit() {
  }

}
