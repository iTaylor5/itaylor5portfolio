import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-v-two-contact-map',
  templateUrl: './v-two-contact-map.component.html',
  styleUrls: ['./v-two-contact-map.component.css']
})
export class VTwoContactMapComponent implements OnInit {

  @Input() contactDetail: any;
  @Input() sectionProp: any;
  
  constructor() { }

  ngOnInit() {
  }

}
